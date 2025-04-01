'use client'

import axios from "axios";
import { useEffect, useState } from "react";

function Listagem() {

    const [ pokemons, alteraPokemons] = useState([])

    async function buscaTodosPokemons() {
       const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
       alteraPokemons(response.data.results)
    }

   
    useEffect(
        () => {buscaTodosPokemons()},[]
    )
    


    return ( 
        <div className="px-20">
            <h1 className="p-10 mb-10 text-center text-red-700 bg-red-50 text-2xl">Lista de pokémons</h1>
            <p>Veja quais são todos os Pokémons</p>

            <hr/>

            {
                pokemons.length > 0 ?
                <ul>


                {
                    pokemons.map( (i, index) => 
                    <li className="flex gap-4 items-center">
                        <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(index+1)+'.png'} />
                        <h2><strong>{index+1}</strong> <br/> {i.name} </h2>
                    </li>
                    )
                }
                </ul>
                
                :
                <p>Carregando...</p>
            }
            
        </div>
    );
}


export default Listagem;