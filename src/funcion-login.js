import App from "./App";
// import { useState } from "react";

const iniciaSesion=()=>{

    document.querySelector("#visible").classList.replace("visible", "invisible");
    
    
        const datosIguales= ()=>{
        }
    
        return(
    
    
            <div>
                <button onClick={App}>SignIn</button>
                <button>LogIn</button>
                <input placeholder="Usuario"></input>
                <br />
                <input placeholder="Contraseña"></input>
                <br />
                <button onClick={datosIguales}>Loguearte</button>
            </div>
        );
      };

  export default iniciaSesion;
