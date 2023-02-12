
const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
const p = document.querySelectorAll('p');
const pClass = document.querySelector('.pClass');
// const pID = document.querySelector('#pID');
const pID = document.getElementById('pID');
const input = document.querySelector('input');
pID.innerHTML="";

console.log(input.value);
 
console.log(
    {
        h1,
        p,
        pClass,
        pID,
        input
    }
);

/////to write into the DOM
// h1.innerHTML = 'Platzi';
// h1.innerHTML = 'Platzi <br> The best';
h1.innerText = 'Platzi <br> The best';
console.log(h1.getAttribute('class'));
console.log(h1.setAttribute('class','red'));
h1.classList.add('green');
h1.classList.remove('red');
// h1.classList.toggle('');
console.log(h1.classList.contains('green'));

input.value = '456';

// console.log(document.createElement('img'));
var img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')

console.log(img);

pID.append(img);


