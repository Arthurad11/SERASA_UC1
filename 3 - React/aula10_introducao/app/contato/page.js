'use client'

import { ToastContainer, ToastContentProps, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

export default function Contato(){
    
    const[ name, setName ] = useState()
    const [ message, setMessage] = useState()

    

    function sendMessage(e){
        
        e.preventDefault()

        if( name == "" || message == ""){
            
            
            

        } else {
           
        }
    }
    
    return(
    <div>

        <h1>Página de contato</h1>
        <p>Entre em contato</p>

        <hr/>

        <form onSubmit={ (e)=> sendMessage(e) } >
            
            <label>
                Digite seu nome:
                <input onChange={ (e)=> setName(e.target.value)}/>
            </label>
            
            <br/>

            <label>
                Digite sua mensagem:
                <input/>
            </label>

            <br/>

            <button>Enviar</button>
        </form>


    </div>
    )
}