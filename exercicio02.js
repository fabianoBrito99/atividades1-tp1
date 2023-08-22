let salario =200;
let porcentagem=0;
let desc =0;
let irDesc=0;
let inssDesc =0;
let fgtsDesc =0;
let descontosTotais=0;
 function descontos(salario, porcentagem)
 {
     
    desc = salario*porcentagem;
    return Ir;

 }


if(salario>=900){

    irDesc = 0;
    inssDesc= descontos(salario, 0.10);
    fgtsDesc = descontos(salario, 0.11);
    descontosTotais = irDesc+inssDesc+fgtsDesc;
    
    console.log("o salário bruto é R$ "+ salario);
    console.log("(-) IR(0%)" +irDesc);
    console.log("(-) INSS(10%) "+inssDesc);
    console.log("(-) FGTS(11%)"+ fgtsDesc);
    console.log("Total de Descontos"+ descontosTotais);
    console.log("Salario Liquido "+ salario-descontosTotais)


}

if(salario<900 && salario<1500){
    irDesc = descontos(salario, 0.05);;
    inssDesc= descontos(salario, 0.10);
    fgtsDesc = descontos(salario, 0.11);
    descontosTotais = irDesc+inssDesc+fgtsDesc;
    
    console.log("o salário bruto é R$ "+ salario);
    console.log("(-) IR(5%)" +irDesc);
    console.log("(-) INSS(10%) "+inssDesc);
    console.log("(-) FGTS(11%)"+ fgtsDesc);
    console.log("Total de Descontos"+ descontosTotais);
    console.log("Salario Liquido "+ salario-descontosTotais)


}

if(salario<=1500&& salario>2500){
    
    irDesc = descontos(salario, 0.10);;
    inssDesc= descontos(salario, 0.10);
    fgtsDesc = descontos(salario, 0.11);
    descontosTotais = irDesc+inssDesc+fgtsDesc;
    
    console.log("o salário bruto é R$ "+ salario);
    console.log("(-) IR(0%)" +irDesc);
    console.log("(-) INSS(10%) "+inssDesc);
    console.log("(-) FGTS(11%)"+ fgtsDesc);
    console.log("Total de Descontos"+ descontosTotais);
    console.log("Salario Liquido "+ salario-descontosTotais)


}

if(salario<=2500){
   
    irDesc = descontos(salario, 0.20);;
    inssDesc= descontos(salario, 0.10);
    fgtsDesc = descontos(salario, 0.11);
    descontosTotais = irDesc+inssDesc+fgtsDesc;
    
    console.log("o salário bruto é R$ "+ salario);
    console.log("(-) IR(0%)" +irDesc);
    console.log("(-) INSS(10%) "+inssDesc);
    console.log("(-) FGTS(11%)"+ fgtsDesc);
    console.log("Total de Descontos"+ descontosTotais);
    console.log("Salario Liquido "+ salario-descontosTotais)

}