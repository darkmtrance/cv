import {useState} from 'react'

function PerfilProfesional() {
  const [text, setText] = useState({
    text:
    "Profesional del área informática entusiasta de la investigación, desarrollo de software, con alta capacidad para el análisis, diseño e implementación, así como coordinar el trabajo en equipos para lograr un trabajo rápido, y adaptable a las necesidades del cliente.",
    hidden: false
  });
  
  const updateText = () => {
    setText(previousState => {
      return { ...previousState, text: "Profesional del área informática entusiasta de la investigación, desarrollo de software, con alta capacidad para el análisis, diseño e implementación, así como coordinar el trabajo en equipos para lograr un trabajo rápido, y adaptable a las necesidades del cliente. Comprometido con el desarrollo del país a través de la generación de valor para la organización que me convoque.", hidden: true }
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