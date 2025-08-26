import React, { useRef, useState } from 'react';

function Correo() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  
  const sayHello = "Hola Mundo";

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    
    // Obtener los valores del formulario
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Enviar al webhook
    fetch('https://n8n.matomaylla.com/webhook/9836489c-f8df-4e26-aa8e-14933d199488', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        subject,
        message,
        timestamp: new Date().toISOString()
      })
    })
    .then(response => {
      setSending(false);
      if (response.ok) {
        document.getElementById('contactSuccess').classList.remove('d-none');
        form.current.reset(); // Limpiar el formulario después de enviar
      } else {
        document.getElementById('contactError').classList.remove('d-none');
      }
    })
    .catch(error => {
      setSending(false);
      console.error('Error:', error);
      document.getElementById('contactError').classList.remove('d-none');
    });
  };

  const ocultarMensaje = (e) => {
    e.preventDefault();
    if(!document.getElementById('contactSuccess').classList.contains('d-none')){
        document.getElementById('contactSuccess').classList.add('d-none');
    }
    if(!document.getElementById('contactError').classList.contains('d-none')){
        document.getElementById('contactError').classList.add('d-none');
    }
  };

  return (
    <section className="section section-no-border bg-color-primary h-100 m-0">
                            <div className="row justify-content-end m-0">
                                <div className="col-half-section col-half-section-right me-3">

                                    <h2 className="text-color-light text-uppercase font-weight-extra-bold">{sayHello}</h2>
                                    <form ref={form} onSubmit={sendEmail} id="contactForm" className="contact-form custom-form-style form-errors-light">
                                        <div className="contact-form-success alert alert-success d-none mt-4" id="contactSuccess">
                                            <strong>¡Enviado correctamente!</strong> Tu mensaje ha sido recibido y me pondré en contacto contigo pronto.
                                        </div>
                                        <div className="contact-form-error alert alert-danger d-none mt-4" id="contactError">
                                            <strong>¡Error!</strong> Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.
                                        </div>

                                        <div className="form-content">
                                            <div className="form-control-custom form-control-custom-light">
                                                <input type="text" className="form-control" name="name" placeholder="Your Name *" data-msg-required="This field is required." id="name" required="" onClick={ocultarMensaje} />
                                            </div>
                                            <div className="form-control-custom form-control-custom-light">
                                                <input type="text" className="form-control" name="subject" placeholder="Subject *" data-msg-required="This field is required." id="subject" required="" onClick={ocultarMensaje} />
                                            </div>
                                            <div className="form-control-custom form-control-custom-light">
                                                <textarea maxLength={5000} data-msg-required="Please enter your message." rows="10" className="form-control" name="message" placeholder="Message*" id="message" required="" aria-required="true" onClick={ocultarMensaje}></textarea>
                                            </div>
                                            <button 
                                              type="submit" 
                                              className="btn btn-quaternary text-color-light text-uppercase font-weight-semibold outline-none custom-btn-style-2 custom-border-radius-1" 
                                              id="button"
                                              disabled={sending}
                                            >
                                              {sending ? 'Enviando...' : 'Enviar mensaje'}
                                              {sending ? 
                                                <i className="fas fa-spinner fa-spin ms-2"></i> :
                                                <i className="fas fa-paper-plane ms-2"></i>
                                              }
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
     </section>
  );
}

export default Correo