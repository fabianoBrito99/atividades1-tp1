function exercicio04(){
let alcool=10;
let gasolina=21;
let desc=0;

function desconto (valor, desconto)
{
    let valorFinal =0;
    valorFinal = valor-(valor*desconto)
    return valorFinal;
}

if( gasolina<=20)
{
    desc=0.04
    console.log(gasolina+" litros de  gasolina o valor final é R$ "+desconto(gasolina, desc))
}
else 
{
    desc=0.06
    console.log(gasolina+" litros gasolina de o valor final é R$ "+desconto(gasolina, desc))
}
if( alcool<=20)
{
    desc=0.03
    console.log(alcool+"litros alcool  de valor final é R$ "+desconto(gasolina, desc))
}
else 
{
    desc=0.05
    console.log(alcool+" litros de alcool o valor final é R$ "+desconto(gasolina, desc))
}
}
module.exports = exercicio04;