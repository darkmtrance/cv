import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Correo() {
  const form = useRef();

  const sayHello = "Hola Mundo";

  console.log(import.meta.env.PUBLIC_TEMPLATEID);
  const templateID = import.meta.env.PUBLIC_TEMPLATEID;

  const sendEmail = (e) => {
    e.preventDefault();
        const serviceID = 'default_service';
        emailjs.sendForm(serviceID, templateID, form.current, "P7gwgRJIiG9VbPrkm")
            .then(() => {
                document.getElementById('contactSuccess').classList.remove('d-none');
            }, (err) => {
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
                                            <strong>Success!</strong> Your message has been sent to us.
                                        </div>
                                        <div className="contact-form-error alert alert-danger d-none mt-4" id="contactError">
                                            <strong>Error!</strong> There was an error sending your message.
                                            <span className="mail-error-message text-1 d-block" id="mailErrorMessage"></span>
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
                                            <input type="submit" className="btn btn-quaternary text-color-light text-uppercase font-weight-semibold outline-none custom-btn-style-2 custom-border-radius-1" id="button" value="Enviar" />
                                        </div>
                                    </form>

                                </div>
                            </div>
     </section>
  );
}

export default Correo