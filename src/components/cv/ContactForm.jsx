import { useState } from 'react';
import { form as copy } from '../../data/ui';

const WEBHOOK = 'https://n8n.matomaylla.com/webhook/9836489c-f8df-4e26-aa8e-14933d199488';

export default function ContactForm({ lang = 'es', email }) {
  const t = copy[lang] ?? copy.es;
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = Object.fromEntries(new FormData(formEl));
    setStatus('sending');
    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      formEl.reset();
      setStatus('sent');
      window.umami?.track('contact-form-sent', { lang });
    } catch (error) {
      console.error(error);
      setStatus('error');
      window.umami?.track('contact-form-error', { lang });
    }
  }

  const clearStatus = () => {
    if (status === 'sent' || status === 'error') setStatus('idle');
  };

  return (
    <form className="form" onSubmit={handleSubmit} onInput={clearStatus}>
      <div className="field">
        <label htmlFor="cf-name">{t.name}</label>
        <input id="cf-name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-email">{t.email}</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field field-wide">
        <label htmlFor="cf-subject">{t.subject}</label>
        <input id="cf-subject" name="subject" required />
      </div>
      <div className="field field-wide">
        <label htmlFor="cf-message">{t.message}</label>
        <textarea id="cf-message" name="message" rows={6} maxLength={5000} required />
      </div>
      <div className="form-footer">
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? t.sending : t.send}
        </button>
        <p className={`form-status${status === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">
          {status === 'sent' && t.sent}
          {status === 'error' && (
            <>
              {t.error} <a href={`mailto:${email}`}>{email}</a>.
            </>
          )}
        </p>
      </div>
    </form>
  );
}
