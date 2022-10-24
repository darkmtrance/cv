import {useState} from 'react'

function HelloWorld() {
  const [text, setText] = useState("Hello World");
  return (
    <div>
        <h1>{text}</h1>
        <button onClick={() => setText("Texto actualizado")}>Click me</button>
        
    </div>

  )
}

export default HelloWorld
