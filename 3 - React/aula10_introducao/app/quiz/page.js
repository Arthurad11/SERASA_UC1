'use client'

import { useState } from "react";

import "./quiz.css"

function Quiz() {

     const [ p1, setP1 ] = useState(0)
     const [ p2, setP2 ] = useState(0)
     const [ p3, setP3 ] = useState(0)
     const [ p4, setP4 ] = useState("")
     const [ total, setTotal ] = useState(0)

     const [ selected, setSelected ] = useState(["","","",""])

     function calculaPontos(){
          setTotal(p1+p2+p3)

          if (p4 == "Naruto" || p4 == "naruto") {
               setTotal(p1+p2+p3 + 1)
          }
     }
     

    return ( 
          <div>
               <h1>Quiz Conradito</h1>
               <p>Assina-le a opção correta!</p>

               <hr/>
               
                    <h2>Qual a cor do cavalo branco de Napoleão</h2>
                    <label ><input name="p1" type="radio" onChange={ ()=> setP1(0) }/> Preto </label>
                    <br/>
                    <label ><input name="p1" type="radio" onChange={ ()=> setP1(0) }/> Azul </label>
                    <br/>
                    <label ><input name="p1" type="radio" onChange={ ()=> setP1(1) }/> branco </label>
                    <br/>
                    <label ><input name="p1" type="radio" onChange={ ()=> setP1(0) } /> Transparente </label>

                    <hr/>

                    <h2>Qual marca de moto não é japonesa?</h2>
                    <label ><input name="p2" type="radio" onChange={ ()=> setP2(0) }/> Honda </label>
                    <br/>
                    <label ><input name="p2" type="radio" onChange={ ()=> setP2(1) }/> Triumph </label>
                    <br/>
                    <label ><input name="p2" type="radio" onChange={ ()=> setP2(0) }/> Kawasaki </label>
                    <br/>
                    <label ><input name="p2" type="radio" onChange={ ()=> setP2(0) }/> Yamaha </label>

                    <hr/>

                    <h2>Quanto é 2+2?</h2>
                    
                    
                              <p className={selected[0]} onClick={ ()=> { setP3(0); setSelected(["selected","","",""]) } }>2</p>
                    
                              <p className={selected[1]} onClick={ ()=> { setP3(0); setSelected(["","selected","",""]) } }>3</p>
                         
                              <p className={selected[2]} onClick={ ()=> { setP3(0); setSelected(["","","selected",""]) } }>8</p>
                         
                              <p className={selected[3]} onClick={ ()=> { setP3(1); setSelected(["","","","selected"]) } }>4</p>
                         
                    
                    
                    <hr/>
                    
                    <h2>Qual o pior anime do mundo?</h2>
                    
                    <input type="text" onChange={ (e)=> setP4(e.target.value)}/>
               

                    <hr/>
                    

                    <button onClick={ ()=> calculaPontos() } >Enviar respostas</button>

                    <p>Total de pontos: {total}</p>
                    

       </div>
     );
}

export default Quiz;