'use client'

import { useState } from "react";



function Quiz2() {

     const [ p1, setP1 ] = useState(0)
     const [ p2, setP2 ] = useState(0)
     const [ p3, setP3 ] = useState(0)
     const [ p4, setP4 ] = useState(0)
     const [ total, setTotal ] = useState(0)

     const [ viewP1, setViewP1] = useState(true)
     const [ viewP2, setViewP2] = useState(false)
     const [ viewP3, setViewP3] = useState(false)
     const [ viewP4, setViewP4] = useState(false)
     
     const [ selected, setSelected ] = useState(["","","",""])

     function calculaPontos(){

            let updatedTotal = 0

            if (p4 == "Naruto" || p4 == "naruto") {
               
                updatedTotal = p1+p2+ p3 +1
                setTotal(updatedTotal)

            } else {
                updatedTotal = p1+p2+p3
                setTotal(updatedTotal)
            }

            let dataValue = parseInt(localStorage.setItem("total"))
            localStorage.setItem("total", updatedTotal + dataValue)


     }
     

    return ( 
          <div>
               <h1>Quiz Conradito</h1>
               <p>Assina-le a opção correta!</p>

               <hr/>

               {
                    viewP1 == true &&
                    <div>
                        <h2>Qual a cor do cavalo branco de Napoleão</h2>
                        <label ><input name="p1" type="radio" onChange={ ()=> {setP1(0); setViewP1(false) ;setViewP2(true)} }/> Preto </label>
                        <br/>
                        <label ><input name="p1" type="radio" onChange={ ()=> {setP1(0); setViewP1(false) ;setViewP2(true)} }/> Azul </label>
                        <br/>
                        <label ><input name="p1" type="radio" onChange={ ()=> {setP1(1); setViewP1(false) ;setViewP2(true)} }/> branco </label>
                        <br/>
                        <label ><input name="p1" type="radio" onChange={ ()=> {setP1(0); setViewP1(false) ;setViewP2(true)} } /> Transparente </label>
                    </div>
               }
               

                    <hr/>

                    {
                        viewP2 == true &&
                        <div>
                            <h2>Qual marca de moto não é japonesa?</h2>
                            <label ><input name="p2" type="radio" onChange={ ()=> setP2(0) }/> Honda </label>
                            <br/>
                            <label ><input name="p2" type="radio" onChange={ ()=> setP2(1) }/> Triumph </label>
                            <br/>
                            <label ><input name="p2" type="radio" onChange={ ()=> setP2(0) }/> Kawasaki </label>
                            <br/>
                            <label ><input name="p2" type="radio" onChange={ ()=> setP2(0) }/> Yamaha </label>

                        </div>
                    }


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

export default Quiz2;