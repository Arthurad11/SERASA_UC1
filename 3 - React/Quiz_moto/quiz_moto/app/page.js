'use client'

import { useState } from "react";

function Moto() {
    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0)
    const [ p3, alteraP3 ] = useState(0)
    const [ p4, alteraP4 ] = useState(0)
    const [ p5, alteraP5 ] = useState(0)
    const [ p6, alteraP6 ] = useState(0)
    const [ p7, alteraP7 ] = useState(0)
    const [ p8, alteraP8 ] = useState(0)
    const [ p9, alteraP9 ] = useState(0)
    const [ p10, alteraP10 ] = useState(0)
    const [ p11, alteraP11 ] = useState(0)
    const [ p12, alteraP12 ] = useState(0)
    const [ p13, alteraP13 ] = useState(0)
    const [ p14, alteraP14 ] = useState(0)
    const [ p15, alteraP15 ] = useState(0)

    const [ ver1, alterVerP1 ] = useState(true)
    const [ ver2, alterVerP2 ] = useState(0)
    const [ ver3, alterVerP3 ] = useState(0)
    const [ ver4, alterVerP4 ] = useState(0)
    const [ ver5, alterVerP5 ] = useState(0)
    const [ ver6, alterVerP6 ] = useState(0)
    const [ ver7, alterVerP7 ] = useState(0)
    const [ ver8, alterVerP8 ] = useState(0)
    const [ ver9, alterVerP9 ] = useState(0)
    const [ ver10, alteraVerP10 ] = useState(0)
    const [ ver11, alteraVerP11 ] = useState(0)
    const [ ver12, alteraVerP12 ] = useState(0)
    const [ ver13, alteraVerP13 ] = useState(0)
    const [ ver14, alteraVerP14 ] = useState(0)
    const [ ver15, alteraVerP15 ] = useState(0)
    



    return ( 
        <div>
            <p></p>
    
            {
                ver1 == true &&
    
                <div>
                    <p>Qual o apelido da Yamaha RD 350?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Mônica</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Sete Gallo</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Viúva Negra</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Tucunaré</label>
                </div>
            }

{
                ver2 == true &&
    
                <div>
                    <p>Qual é a principal característica da moto Harley-Davidson Softail?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Estrutura com chassi rígido</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Suspensão traseira oculta</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Motor de 1200cc</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Carenagem esportiva</label>
                </div>
            }

{
                ver3 == true &&
    
                <div>
                    <p>Em que ano a Honda XRE 300 foi lançada no Brasil?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>2005</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>2008</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>2010</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>2012</label>
                </div>
            }

{
                ver4 == true &&
    
                <div>
                    <p>Qual a cilindrada da moto Kawasaki Ninja 300, que foi muito popular no Brasil?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>150cc</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>300cc</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>500cc</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>650cc</label>
                </div>
            }

{
                ver5 == true &&
    
                <div>
                    <p>Qual modelo da Honda foi considerado um ícone das motos de baixa cilindrada no Brasil na década de 1980?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Honda CB 500</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Honda XR 250</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Honda CG 125</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Honda Titan 150</label>
                </div>
            }

{
                ver6 == true &&
    
                <div>
                    <p>A qual marca pertence a moto esportiva conhecida como CBR 1000RR?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Yamaha</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Suzuki</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Kawasaki</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Honda</label>
                </div>
            }

{
                ver7 == true &&
    
                <div>
                    <p>Qual a principal característica da motocicleta Harley-Davidson Iron 883, que foi popular no Brasil?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Motor V-twin de 883cc</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Motor 4 cilindros em linha</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Design esportivo</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Pneus largos para off-road</label>
                </div>
            }

{
                ver8 == true &&
    
                <div>
                    <p>Qual era o apelido da Honda XLX 350R? </p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Xiselão</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Xiselinha</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Tucunaré</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Van Gogh</label>
                </div>
            }

{
                ver9 == true &&
    
                <div>
                    <p>A Honda CRF 230F é uma moto voltada para qual tipo de uso?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Enduro e off-road</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Estrada e viagens longas</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Circuitos de motocross</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Uso urbano e street</label>
                </div>
            }

{
                ver10 == true &&
    
                <div>
                    <p>Qual modelo da Yamaha foi lançado no Brasil como uma versão de entrada para a linha de motos esportivas?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Yamaha R3</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Yamaha MT-07</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Yamaha YZF-R1</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Yamaha XTZ 250</label>
                </div>
            }

{
                ver11 == true &&
    
                <div>
                    <p>Qual foi a primeira moto japonesa a ser vendida no Brasil?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Honda CB 750</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Yamaha RD 350</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Kawasaki Z1000</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Suzuki Titan 125</label>
                </div>
            }

{
                ver12 == true &&
    
                <div>
                    <p>Qual foi o principal modelo de motocicleta da Kawasaki utilizado em competições de Superbike no Brasil?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Kawasaki Ninja 300</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Kawasaki Z800</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Kawasaki Ninja ZX-10R</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Kawasaki Versys 650</label>
                </div>
            }

{
                ver13 == true &&
    
                <div>
                    <p>Qual a principal inovação da moto Ducati Monster 1200 que foi lançada no Brasil em 2014?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Motor com turbo</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Sistema de suspensão adaptativo</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Design naked e motor de 1198cc</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Sistema de frenagem ABS</label>
                </div>
            }

{
                ver14 == true &&
    
                <div>
                    <p>Qual moto é famosa por ser a "moto da polícia" no Brasil?</p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Yamaha XT 660</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Honda CB 500X</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Harley-Davidson Road King</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>BMW R 1200 RT</label>
                </div>
            }

{
                ver15 == true &&
    
                <div>
                    <p>Qual era o nome original da Bico de Pato? </p>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(1)}/>Suzuki DR800</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>Yamaha Crosser </label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>CBR 450 SR</label>
                    <br/>
                    <label><input name="p1" type="radio" onChange={ ()=> alteraP1(0)}/>CB 250</label>
                </div>
            }



        </div>
        
    );
}

export default Moto;