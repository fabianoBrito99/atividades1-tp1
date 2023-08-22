let salario =2600;
let porcentagem=0;
let desc =0;
let irDesc=0;
let inssDesc =0;
let fgtsDesc =0;
let descontosTotais=0;
let salarioLiquido=0;

 function descontos(salario, porcentagem)
 {
    desc = salario*porcentagem;
    return desc;
 }


if(salario<=900){

    irDesc = 0;
    inssDesc= descontos(salario, 0.10);
    fgtsDesc = descontos(salario, 0.11);
    descontosTotais = irDesc+inssDesc+fgtsDesc;
    salarioLiquido =salario-descontosTotais;
    
    console.log("o salário bruto é R$ "+ salario);
    console.log("(-) IR(0%) R$ " +irDesc);
    console.log("(-) INSS(10%) R$ "+inssDesc);
    console.log("(-) FGTS(11%) R$ "+ fgtsDesc);
    console.log("Total de Descontos R$ "+ descontosTotais);
    console.log("Salario Liquido R$ "+ salarioLiquido)


}

if(salario>900 && salario<=1500){
    irDesc = descontos(salario, 0.05);;
    inssDesc= descontos(salario, 0.10);
    fgtsDesc = descontos(salario, 0.11);
    descontosTotais = irDesc+inssDesc+fgtsDesc;
    salarioLiquido =salario-descontosTotais;
    
    console.log("o salário bruto é R$ "+ salario);
    console.log("(-) IR(5%) R$ " +irDesc);
    console.log("(-) INSS(10%) R$ "+inssDesc);
    console.log("(-) FGTS(11%) R$ "+ fgtsDesc);
    console.log("Total de Descontos R$ "+ descontosTotais);
    console.log("Salario Liquido R$ "+ salarioLiquido)

}

if(salario>1500&& salario<=2500){
    
    irDesc = descontos(salario, 0.10);;
    inssDesc= descontos(salario, 0.10);
    fgtsDesc = descontos(salario, 0.11);
    descontosTotais = irDesc+inssDesc+fgtsDesc;
    salarioLiquido =salario-descontosTotais;
    
    console.log("o salário bruto é R$ "+ salario);
    console.log("(-) IR(10%) R$ " +irDesc);
    console.log("(-) INSS(10%) R$ "+inssDesc);
    console.log("(-) FGTS(11%) R$ "+ fgtsDesc);
    console.log("Total de Descontos R$ "+ descontosTotais);
    console.log("Salario Liquido R$ "+ salarioLiquido)

}

if(salario>=2500){
   
    irDesc = descontos(salario, 0.20);;
    inssDesc= descontos(salario, 0.10);
    fgtsDesc = descontos(salario, 0.11);
    descontosTotais = irDesc+inssDesc+fgtsDesc;
    salarioLiquido =salario-descontosTotais;
    
    console.log("o salário bruto é R$ "+ salario);
    console.log("(-) IR(20%) R$ " +irDesc);
    console.log("(-) INSS(10%) R$ "+inssDesc);
    console.log("(-) FGTS(11%) R$ "+ fgtsDesc);
    console.log("Total de Descontos R$ "+ descontosTotais);
    console.log("Salario Liquido R$ "+ salarioLiquido)
}