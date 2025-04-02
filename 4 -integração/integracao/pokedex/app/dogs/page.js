"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function Dogs() {
	const [dogs, setDogs] = useState([]);
	// const [botao, setBotao] = useState(0)
	const [raca, setRacas] = useState([]);

	async function buscaDogs() {
		const response = await axios.get("https://dog.ceo/api/breeds/image/random/50");
		setDogs(response.data.message);
		// if(botao == 0){
		//     const response = await axios.get("https://dog.ceo/api/breeds/image/random/50");
		//     setDogs(response.data.message);
		// } else if(botao == 1){
		//     const response = await axios.get('https://dog.ceo/api/breed/pitbull/images/random/50')
		//     setDogs(response.data.message);
		// } else if (botao == 2){
		//     const response = await axios.get('https://dog.ceo/api/breed/labrador/images/random/50')
		//     setDogs(response.data.message);
		// } else {
		//     const response = await axios.get('https://dog.ceo/api/breed/beagle/images/random/50')
		//     setDogs(response.data.message);
		// }
	}

	async function buscaRaca(raca) {
		const response = await axios.get("https://dog.ceo/api/breed/" + raca + "/images/random/50");
		setDogs(response.data.message);
	}

	async function buscaTodasRacas() {
		const response = await axios.get("https://dog.ceo/api/breeds/list/all");
		setRacas(Object.keys(response.data.message));
	}

	useEffect(() => {
		buscaDogs();
		buscaTodasRacas();
	}, []);

	return (
		<div>
			<h1>Lista de Dogs</h1>
			<p>Os melhores HotDogs</p>

			<hr />

			<div>
			    <button className="bg-green-100 p-2 m-5 ml-40" onClick={() => {buscaTodasRacas();}}>Ver todos</button>
				{
                raca.length > 0 &&
					raca.map(i => (
							<button className="bg-green-100 p-2 m-5" onClick={() => buscaRaca(i)}>
								{i}
							</button>
					))
                    }
			</div>

			<ul className="flex flex-wrap gap-3 m-5 text-center content-center justify-center m-15">
				{dogs.map((i, index) => (
					<li key={index} className="flex gap-4 items-center ">
						<img className="w-75 h-75 rounded-lg" src={i} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Dogs;
