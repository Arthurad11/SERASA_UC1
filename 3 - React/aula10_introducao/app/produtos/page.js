import Menu from "./components/Menu";
import Produto from "./components/Produto";

function Produtos() {
    return ( 
        <div>

           <Menu/>

            <h1>Produtos</h1>
            <p>Bem-vindo a pagina de produtos🙂</p>

            <hr/>

            <Produto nome="Maçã" preco="19,90" estoque={true}/>
            <Produto nome="Banana" preco="15,40" />
            <Produto nome="Pera" preco="6,89" estoque={true}/>

            <hr/>

            

        </div>
     );
}

export default Produtos;