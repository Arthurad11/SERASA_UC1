"use client";

import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
	const [produtos, alteraProdutos] = useState([]);

    const [nome, alteraNome] = useState([]);
    const [preco, alteraPreco] = useState([]);
    const [quantidade, alteraQuantidade] = useState([]);

	const [editando, alteraEditando] = useState(0);
	const [pesquisa, alteraPesquisa] = useState("");

	async function buscaTodos() {
		const response = await axios.get("http://localhost:3000/api/produtos/");
		alteraProdutos(response.data);
	}

	async function buscaPorId( id ) {
		const response = await axios.get("http://localhost:3000/api/produtos/"+id)
		alteraProdutos( response.data )
	}

	function buscaPorNome() {}

	async function insereProduto(e) {
        
        e.preventDefault()
        
        const obj = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        const response = await axios.post("http://localhost:3000/api/produtos/", obj)
        console.log(response.data)

        buscaTodos()

		alteraNome("")
		alteraPreco("")
		alteraQuantidade("")
    }
	
    
    async function atualizaProdutos() {
		const obj ={
			nome: nome,
			preco: preco,
			quantidade: quantidade
		}

		const response = await axios.put("http://localhost:3000/api/produtos/"+editando, obj)

		buscaTodos()

		alteraEditando(0)

		alteraNome("")
		alteraPreco("")
		alteraQuantidade("")
	}
	
	async function removeProdutos(id) {
		await axios.delete("http://localhost:3000/api/produtos/"+id)
		buscaTodos()
	}

    function formataData( valor ){
        let data = valor.split("T")[0]
        let hora = valor.split("T")[1]

        data = data.split("-")
        data = data.reverse()
        data = data.join("/")

        hora = hora.split(".")[0]
        hora = hora.split(":")
        hora = hora[0]+":"+hora[1]

        return data + " às " + hora
    }

	function montaEdicao( produto ) {
		alteraEditando( produto.id )

		alteraNome( produto.nome )
		alteraPreco( produto.preco )
		alteraQuantidade( produto.quantidade )
	}

	function enviaFormulario(e) {
		e.preventDefault()

		if(editando == 0){
			insereProduto()
		} else {
			atualizaProdutos()
		}
	}


	useEffect(() => {
		buscaTodos()
	}, []);

	return (
		<div>
			<style>
				{`
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                    font-family: Arial, sans-serif;
                }

                th, td {
                    padding: 12px;
                    text-align: left;
                    border: 1px solid #ddd;
                }

                th {
                    background-color: #4CAF50;
                    color: white;
                }

                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
				
				tr{
				cursor: pointer;
			}
                tr:hover {
                    background-color: #ddd;
                }
			
				button {
					cursor: pointer;
				}
                `}
			</style>

			<h1>Gerenciamento de produtos</h1>

			<button>Listagem</button>
			<button>Cadastro</button>

			<hr />

			<p>Busca de produtos. Digite o ID</p>
			<input type="text" onChange={ (e)=> alteraPesquisa(e.target.value)}/>
			<button onClick={ ()=> buscaPorId(pesquisa)}>Pesquisar</button>

			<h2>Listagem</h2>

			{produtos.length > 0 ? (
				<table>
					<thead>
						<tr>
							<td>ID</td>
							<td>Nome</td>
							<td>Preço</td>
							<td>Quantidade</td>
							<td>Registro</td>
						</tr>
					</thead>

					<tbody>
						{produtos.map((i) => (
							<tr>
								<td>{i.id}</td>
								<td>{i.nome}</td>
								<td>R$ {i.preco.toFixed(2)}</td>
								<td>{i.quantidade}</td>
								<td>{formataData(i.registro)}</td>
								<td><button onClick={ () => redirect("/produto/"+i.id)}>Ver</button>
								<button onClick={ () => montaEdicao(i)} >Editar</button>
								<button onClick={ () => removeProdutos(i.id)}>Remover</button></td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>Carregando...</p>
			)}

			<hr />

			<h1> Cadastro </h1>

			<hr />

			<form onSubmit={ (e)=> enviaFormulario(e)}>
				<label>
					Digite o nome do produto: <br />
					<input onChange={ (e) => alteraNome(e.target.value)} value={nome}/>
				</label>
				<br />
				<label>
					Digite o preço do produto: <br />
					<input onChange={ (e) => alteraPreco(e.target.value)} value={preco}/>
				</label>
				<br />
				<label>
					Digite a quantidade do produto: <br />
					<input onChange={ (e) => alteraQuantidade(e.target.value)} value={quantidade}/>
				</label>
				<br />
				<button>Salvar</button>
			</form>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	);
}
