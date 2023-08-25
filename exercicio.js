function exercicio01(){

let salario =200;
let reajustes =0;

function reajustar(salarioInicial,reajuste)
{
     let salariofinal=0;

     salariofinal = salarioInicial+ (salarioInicial*reajuste);

    return salariofinal;
}

if(salario>=280){
    reajustes = 0.20;
    console.log("o salário inicial é R$ "+ salario+ "  o salário com reajuste é é R$ "+ reajustar(salario, reajustes) );

}
else if(salario<280 && salario>=700){
     reajustes =0.15;
    console.log("o salário inicial é R$ "+ salario+ "  o salário com reajuste é é R$ "+ reajustar(salario, reajustes) );

}

else if(salario<700 && salario>= 1500){
     reajustes =0.10;
    console.log("o salário inicial é R$ "+ salario+ "  o salário com reajuste é é R$ "+ reajustar(salario, reajustes) );

}
else if(salario<=1500 ){
     reajustes =0.15;
    console.log("o salário inicial é R$ "+ salario+ "  o salário com reajuste é é R$ "+ reajustar(salario, reajustes) );

}

}
module.exports = exercicio01;

