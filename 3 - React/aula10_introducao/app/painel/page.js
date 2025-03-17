'use client'
import { useState } from "react";

import "./painel.css"
import Produtos from "../produtos/page";

function Painel() {

    const [ user, setUser ] = useState("")
    const [ pass, setPass] = useState("") 

    const [ error, setError ] = useState(false)
    const [ sucess, setSucess ] = useState(false)

    function login(){
        if (user == "arthur" && pass == "12345"){
            setError(false)
            setSucess(true)
        } else if (user == "" && pass == "") {
            setError(false)
            setSucess(false)
        } else {
            setError(true)
            setSucess(false)
        }
    }
 

    return ( 
        <div>
            <h1> Painel administrativo</h1>
            
            <label>
                Digite o usuário:
                <input onChange={ (e)=> setUser(e.target.value) } />
            </label>

            <br/>

            <label>
                Digite a senha:
                <input type="password" onChange={ (e)=> setPass(e.target.value) }/>
            </label>

            <br/>

            <button onClick={ ()=> login()}>Entrar</button>

            {
                error == true ? 
                    <div className="error"> 
                        <p>Usuário ou senha incorretos</p>
                    </div> 
                :
                    <div></div>
                
            }

            {
                sucess == true ? 
                    <div className="sucess"> 
                        <p>Logado com sucesso!</p>
                    </div> 
                :
                    <div></div>
            }



            

            <br/>

        </div>
    );
}

export default Painel;