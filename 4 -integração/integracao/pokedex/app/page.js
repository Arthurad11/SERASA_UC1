'use client'

import axios from "axios";
import { useState } from "react";

export default function Home() {

    const [pokemon, alteraPokemon] = useState({})
    const [pesquisa, alteraPesquisa] = useState('')
    
    async function buscaPokemon(){

        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+pesquisa)
        console.log(response)
        alteraPokemon(response.data)
    }

    

    async function proximoPokemon( proximo ){
        
        const id = parseInt(pokemon.id) + (proximo == true ? 1 : -1);

        // if(proximo == true){
        //     id = parseInt(pokemon.id) + 1;
        // } else {
        //     id = parseInt(pokemon.id) - 1;
        // }

        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+id);
        alteraPokemon(response.data)
    }
        
    

  	return (
    	<div className="px-10">

            <h1 className="p-8 mb-8 text-indigo-50 bg-red-500 text-2xl text-center">Pokedex</h1>
            <p className="text-indigo-50">Os melhores pokemons estão aqui!</p>

            <hr/>

            <form onSubmit={ (e)=> { e.preventDefault(); buscaPokemon() }}>
                <p className="text-indigo-50 ">Digite o nome do Pokémon:</p>
                <input onChange={ (e)=> alteraPesquisa(e.target.value)} className="border my-5 rounded-md "/>
                <br/>
                <button className="text-indigo-50 bg-indigo-50 text-stone-950 rounded-sm ">Pesquisar</button>
            </form>
            {
                pokemon.name ?
                    <div>
                        <img width={100} src={pokemon.sprites.other.showdown.front_default} />
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.types[0].type.name}</p>

                        <button onClick={ ()=> { proximoPokemon(false)}}>Anterior</button>
                        <button onClick={ ()=> { proximoPokemon(true)}}>Próximo</button>
                    </div>
                    

                :
                    <p>Carregando...</p>
            }


            


        </div>
  );
}
