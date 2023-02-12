const h1 = document.querySelector('h1');
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
const btnCalculate = document.querySelector('#btnCalculate');
const result = document.querySelector('.result');

btnCalculate.addEventListener('click',onClick);

function onClick(){
    
    var sum = Number(input1.value) + Number(input2.value);

    console.log(sum);
    result.innerHTML = 'Result: ' + sum;
}
