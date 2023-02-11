const h1 = document.querySelector('h1');
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
const btnCalculate = document.querySelector('#btnCalculate');
const result = document.querySelector('.result');
const form = document.querySelector('#form');

form.addEventListener('submit',onSubmit);

function onSubmit(event){
    console.log({event});
    event.preventDefault();
    var sum = Number(input1.value) + Number(input2.value);

    console.log(sum);
    result.innerHTML = 'Result: ' + sum;
}
