function Produto(attr) {


    return ( 
        <div style={{margin: 10, border: '3px solid red', width: 150, padding: 10}}>
                <h2>{attr.nome}</h2>

                {
                    attr.desconto != null &&
                    <p><strong>{attr.desconto}% OFF</strong></p>
                }
                
                {
                    attr.estoque == true ?
                    <div>
                        <p>R$ {attr.preco}</p>
                        <button>Comprar</button>
                    </div>

                    :

                    <p>Produto indisponível</p>
                }
            </div>
    );
}

export default Produto;