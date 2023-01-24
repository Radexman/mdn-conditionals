// const output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;

// while (i >= 0) {
//   const para = document.createElement('p');
//   if (i === 10) {
//     para.textContent = `Countdown ${i}`;
//   } else if (i === 0) {
//     para.textContent = 'Blast off!';
//   } else {
//     para.textContent = i;
//   }

//   output.appendChild(para);

//   i--;
// }

// const addmitted = document.querySelector('.addmitted');
// const refused = document.querySelector('.refused');
// addmitted.textContent = 'Admit: ';
// refused.textContent = 'Refused: ';

// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// for (const person of people) {
//     if (person === 'Phil' || person === 'Lola') {
//         refused.textContent += `${person}, `;
//     } else {
//         addmitted.textContent += `${person}, `;
//     }
// }

// const list = document.querySelector('.list');
// const cats = ['Leopard', 'Cheatah', 'Tiger', 'Lion', 'Caracal'];

// for (const cat of cats){
//     const listItem = document.createElement('li');
//     listItem.textContent = cat;
//     list.appendChild(listItem);
// }

// const section = document.querySelector('.section');
// const name = 'Mustafa';
// const para = document.createElement('p');
// const phonebook = [
//     {name: 'Chris', number: '1549'},
//     {name: 'Li Kang', number: '9634'},
//     {name: 'Anne', number: '9065'},
//     {name: 'Francesca', number: '3001'},
//     {name: 'Mustafa', number: '6888'},
//     {name: 'Tina', number: '4312'},
//     {name: 'Bert', number: '7780'},
//     {name: 'Jada', number: '2282'}
// ]

// for (let i = 0; i < phonebook.length; i++) {
//     if (phonebook[i].name === name) {
//         para.textContent = `${phonebook[i].name}' s number is ${phonebook[i].number}.`;
//         break;
//     }

//     if (i === phonebook.length - 1) {
//         para.textContent = 'Name not found in phonebook';
//     }
// }

// section.appendChild(para);

let i = 500;
const para = document.createElement('p');
const section = document.querySelector('.section');

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

do {
    if (isPrime(i)) {
        para.textContent += `${i} `;
    }
    i--;
} while (i > 1);

section.appendChild(para);