const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}

const addmitted = document.querySelector('.addmitted');
const refused = document.querySelector('.refused');
addmitted.textContent = 'Admit: ';
refused.textContent = 'Refused: ';

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

for (const person of people) {
    if (person === 'Phil' || person === 'Lola') {
        refused.textContent += `${person}, `;
    } else {
        
    }
}

