const button = document.getElementById('btn');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso'); 
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

// if return
const getText = (imc) =>{
    if( imc > 40) return " Obesidade grau 3";
    if(imc > 35) return "Obesidade grau 2";
    if(imc > 30) return "obesidade grau 1";
    if(imc > 25) return "Levemente acima do peso";
    if(imc > 18.5) return "Peso ideal";
    return "Abaixo do peso";
}

const calcularImc = () => {
    if(!peso.value || !altura.value || !nome.value ) return resultado.textContent = "Preencha todos os Campos"
    // calculando o valor do Imc
    const valorImc = (+peso.value /(+altura.value * +altura.value)).toFixed(1) // toFixed() para o valor ficar arredondado
    // + no começo para transformar a string em number


    // estará passando o valor do imc para dentro da  função "getText"
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`; 
    // esse texto será inserido dentro da div
}

//"addEventListener Adiciona um evento
button.addEventListener('click', calcularImc) // adciona um evento de clique e exibirá o calcularImc
