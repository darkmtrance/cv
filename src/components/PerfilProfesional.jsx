import {useState} from 'react'

function PerfilProfesional() {
  const [text, setText] = useState({
    text:
    "Soy un apasionado profesional del área informática, con más de 13 años de experiencia dedicados a la investigación y desarrollo de software. Mi fortaleza radica en mi capacidad para analizar, diseñar e implementar soluciones innovadoras.",
    hidden: false
  });
  
  const updateText = () => {
    setText(previousState => {
      return { ...previousState, text: "Soy un apasionado profesional del área informática, con más de 13 años de experiencia dedicados a la investigación y desarrollo de software. Mi fortaleza radica en mi capacidad para analizar, diseñar e implementar soluciones innovadoras. Soy hábil en la coordinación efectiva de equipos, impulsando un rendimiento ágil y adaptándome a las necesidades cambiantes del cliente. Mi compromiso inquebrantable con la generación de valor me distingue, y estoy ansioso por aportar mis habilidades y conocimientos para impulsar el éxito de la organización que me convoque.", hidden: true }
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