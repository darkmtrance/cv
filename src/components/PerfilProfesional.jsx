import {useState} from 'react'

function PerfilProfesional() {
  const [text, setText] = useState({
    text:
    "Más de 15 años de experiencia como Arquitecto de Información. Lideré el desarrollo de sistemas tributarios en Indra y SAPIA, logrando mejoras en calidad, rendimiento y mantenibilidad. Como mentor, brindo mentorías técnicas en tecnologías Java para equipos LATAM en Indra.",
    hidden: false
  });
  
  const updateText = () => {
    setText(previousState => {
      return { ...previousState, text: "Más de 15 años de experiencia como Arquitecto de Software. Lideré el desarrollo de sistemas tributarios en Indra y SAPIA, logrando mejoras en calidad, rendimiento y mantenibilidad. Como mentor, brindo mentorías técnicas en tecnologías Java para equipos LATAM en Indra.", hidden: true }
    });
  }

  return (
    <div>
        <p>{text.text}</p>
        <div hidden={text.hidden}>
            <a id="aboutMeMoreBtn2" className="btn btn-tertiary text-uppercase custom-btn-style-1 text-1"  onClick={updateText}>Ver Más</a>
        </div>
    </div>
  )
}

export default PerfilProfesional