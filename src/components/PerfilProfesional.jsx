import {useState} from 'react'

function PerfilProfesional({ lang = 'es' }) {
  const translations = {
    es: {
      text: "Más de 15 años de experiencia como Arquitecto de Software. Lideré el desarrollo de sistemas tributarios en Indra y SAPIA, logrando mejoras en calidad, rendimiento y mantenibilidad. Como mentor, brindo mentorías técnicas en tecnologías Java para equipos LATAM en Indra.",
      button: "Ver Más"
    },
    en: {
      text: "Over 15 years of experience as a Software Architect. Led development of tax systems at Indra and SAPIA, achieving improvements in quality, performance, and maintainability. As a mentor, I provide technical mentoring in Java technologies for LATAM teams at Indra.",
      button: "See More"
    }
  };

  const t = translations[lang] || translations.es;
  
  const [text, setText] = useState({
    text: t.text,
    hidden: false
  });
  
  const updateText = () => {
    setText(previousState => {
      return { ...previousState, text: t.text, hidden: true }
    });
  }

  return (
    <div>
        <p>{text.text}</p>
        <div hidden={text.hidden}>
            <a id="aboutMeMoreBtn2" className="btn btn-tertiary text-uppercase custom-btn-style-1 text-1"  onClick={updateText}>{t.button}</a>
        </div>
    </div>
  )
}

export default PerfilProfesional