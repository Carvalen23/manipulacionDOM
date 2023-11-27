const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn');
const pResult = document.querySelector('#resultado')

btn.addEventListener('click', btnOnclick);

function btnOnclick(){
    const sumaVariables =  input1.value + input2.value;
    pResult.innerText= "resulatdo:" + " " + sumaVariables;
}






