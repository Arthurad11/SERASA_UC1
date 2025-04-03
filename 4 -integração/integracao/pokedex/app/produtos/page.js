'use client'

import axios from "axios"
import { useEffect, useState } from "react"

function Produtos() {

    const [ produtos, alteraProdutos ] = useState([])
    
    async function buscaProdutos(){
        const response = await axios.get('http://localhost:3000/api/produtos')
        console.log(response)
        alteraProdutos(response.data)
    }

    useEffect( ()=>
    {
        buscaProdutos()
    },[])

    return ( 
        <div className="container mx-auto" >

            <h1 className="p-10 mb-10 text-center text-yellow-900 bg-yellow-50 text-2xl">Produtos</h1>
            <p>Estes são os produtos do banco de dados:</p>

            <hr/>

            {produtos.map(i => 
            <div  className="border ">
                <h3 className="text-md"><span className="font-bold">{i.nome}</span> - R$ {i.preco.toFixed(2)}</h3>
                <h6 className="text-sm text-blue-900 ">Quantidade em estoque: <span className="font-bold">{i.quantidade}</span></h6>

            </div>
            )}
        </div>
     );
}

export default Produtos;