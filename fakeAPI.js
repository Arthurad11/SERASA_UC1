let banco = [
    {
      "nome": "Microsoft Xbox Wireless Controller + USB-C Cable - Xbox",
      "valor": 439.90,
      "parcelas_numero": 12,
      "parcelas_forma": "x",
      "frete_valor": 11.96,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    },
    {
      "nome": "Cabo USB-C I2GO 2m 2,4A Nylon Trançado Chumbo - I2GO PRO",
      "valor": 39.90,
      "parcelas_numero": 1,
      "parcelas_forma": "à vista",
      "frete_valor": 0,
      "frete_tipo": "gratis",
      "entrega_prime": false,
      "desconto": {
        "ativo": true,
        "valor": 0.2
      }
    },
    {
      "nome": "Fone de Ouvido Sony WH-1000XM4",
      "valor": 2199.90,
      "parcelas_numero": 10,
      "parcelas_forma": "x",
      "frete_valor": 30.00,
      "frete_tipo": "fixo",
      "entrega_prime": true,
      "desconto": {
        "ativo": true,
        "valor": 0.15
      }
    },
    {
      "nome": "Smartphone Samsung Galaxy S22",
      "valor": 4599.90,
      "parcelas_numero": 18,
      "parcelas_forma": "x",
      "frete_valor": 25.50,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    },
    {
      "nome": "Notebook Dell Inspiron 15",
      "valor": 2999.90,
      "parcelas_numero": 12,
      "parcelas_forma": "x",
      "frete_valor": 20.00,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": true,
        "valor": 0.1
      }
    },
    {
      "nome": "Monitor LG 27GN950-B 4K UHD",
      "valor": 3499.90,
      "parcelas_numero": 6,
      "parcelas_forma": "x",
      "frete_valor": 40.00,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": true,
        "valor": 0.05
      }
    },
    {
      "nome": "Teclado Mecânico Razer Huntsman V2",
      "valor": 1399.90,
      "parcelas_numero": 10,
      "parcelas_forma": "x",
      "frete_valor": 18.00,
      "frete_tipo": "fixo",
      "entrega_prime": true,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    },
    {
      "nome": "Mouse Logitech G Pro X Superlight",
      "valor": 799.90,
      "parcelas_numero": 6,
      "parcelas_forma": "x",
      "frete_valor": 15.00,
      "frete_tipo": "fixo",
      "entrega_prime": true,
      "desconto": {
        "ativo": true,
        "valor": 0.1
      }
    },
    {
      "nome": "Cadeira Gamer DXRacer Formula Series",
      "valor": 1999.90,
      "parcelas_numero": 12,
      "parcelas_forma": "x",
      "frete_valor": 50.00,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    },
    {
      "nome": "Console PlayStation 5",
      "valor": 4999.90,
      "parcelas_numero": 18,
      "parcelas_forma": "x",
      "frete_valor": 35.00,
      "frete_tipo": "fixo",
      "entrega_prime": true,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    },
    {
      "nome": "Smart TV Samsung QLED 55\"",
      "valor": 3999.90,
      "parcelas_numero": 12,
      "parcelas_forma": "x",
      "frete_valor": 45.00,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    },
    {
      "nome": "Câmera Canon EOS 80D",
      "valor": 4599.90,
      "parcelas_numero": 18,
      "parcelas_forma": "x",
      "frete_valor": 55.00,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": true,
        "valor": 0.2
      }
    },
    {
      "nome": "Caixa de Som JBL Charge 5",
      "valor": 799.90,
      "parcelas_numero": 6,
      "parcelas_forma": "x",
      "frete_valor": 18.00,
      "frete_tipo": "fixo",
      "entrega_prime": true,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    },
    {
      "nome": "Relógio Garmin Forerunner 945",
      "valor": 2499.90,
      "parcelas_numero": 12,
      "parcelas_forma": "x",
      "frete_valor": 15.00,
      "frete_tipo": "fixo",
      "entrega_prime": true,
      "desconto": {
        "ativo": true,
        "valor": 0.1
      }
    },
    {
      "nome": "Carregador Solar Anker PowerPort Solar Lite",
      "valor": 199.90,
      "parcelas_numero": 6,
      "parcelas_forma": "x",
      "frete_valor": 10.00,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    },
    {
      "nome": "HD Externo Seagate 2TB",
      "valor": 349.90,
      "parcelas_numero": 6,
      "parcelas_forma": "x",
      "frete_valor": 12.00,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": true,
        "valor": 0.05
      }
    },
    {
      "nome": "Power Bank Xiaomi 10000mAh",
      "valor": 149.90,
      "parcelas_numero": 6,
      "parcelas_forma": "x",
      "frete_valor": 8.00,
      "frete_tipo": "fixo",
      "entrega_prime": false,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    },
    {
      "nome": "Aspirador de Pó Robô iRobot Roomba 960",
      "valor": 2599.90,
      "parcelas_numero": 12,
      "parcelas_forma": "x",
      "frete_valor": 50.00,
      "frete_tipo": "fixo",
      "entrega_prime": true,
      "desconto": {
        "ativo": true,
        "valor": 0.15
      }
    },
    {
      "nome": "Câmera de Segurança Nest Cam Outdoor",
      "valor": 1099.90,
      "parcelas_numero": 6,
      "parcelas_forma": "x",
      "frete_valor": 20.00,
      "frete_tipo": "fixo",
      "entrega_prime": true,
      "desconto": {
        "ativo": false,
        "valor": 0
      }
    }
  ];

function buscaTodos(){
    for(let i = 0; i < banco.length; i++){
      console.log("nome: "+ banco[i].nome + " - R$"+ banco[i].valor)
    }
};
  
function busca(pesquisa){
    for (let i = 0;i < banco.length; i++){
        if(banco[i].nome == pesquisa){
            console.log("Nome: "+banco[i].nome+" - R$ "+ banco[i].valor);
            break
        }
    }
        
};

busca("Aspirador de Pó Robô iRobot Roomba 960");