'use client'

import axios from "axios";
import { useEffect, useState } from "react";

function Dogs() {

    const [dogs, setDogs] = useState([]); // Melhor nome para o setter de estado

    async function buscaDogs() {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random/50');
            setDogs(response.data.message); // Atualizando para 'message' da API
        } catch (error) {
            console.error('Erro ao buscar imagens dos cães', error);
        }
    }
    
    useEffect(() => {
        buscaDogs();
    }, []);

    return (  
        <div>
            <h1>Lista de Dogs</h1>
            <p>Os melhores HotDogs</p>

            <hr/>

            <ul className="flex flex-wrap gap-3 m-5 text-center content-center justify-center m-15">
                {
                    dogs.map((i, index) => (
                        <li key={index} className="flex gap-4 items-center ">
                            <img className="w-75 h-75"  src={i} />
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default Dogs;
