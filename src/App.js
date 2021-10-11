import { useState } from "react";
import iniciaSesion from "./funcion-login";


function App() {
  const [nombre, setNombre]= useState("");
  const [contraseña, setContraseña]= useState("");

    const guardarNombre= (e)=>{
        setNombre(e.target.value);
        console.log(nombre);
        
    };

    const guardarContraseña=(e)=>{
        setContraseña(e.target.value);
        console.log(contraseña);
    };

    const guardarDatos=()=>{
      setNombre(nombre);
      console.log(nombre);
      setContraseña(contraseña);
      console.log(contraseña);
    };

    
    return (
        <div id="visible" className="visible">
          <button>SignIn</button>
          <button onClick={iniciaSesion}>LogIn</button>
          <br />
          <input
            placeholder="Usuario Nuevo"
            onChange={(e)=> guardarNombre(e)}
            value={nombre}
          />
           
          <br />
          <input
            placeholder="Contraseña Nueva"
            onChange={(e)=> guardarContraseña(e)}
            value={contraseña}
          />
          <br />
          <button onClick={guardarDatos}>Crear Usuario</button>
        </div>
      );

}



export default App;
