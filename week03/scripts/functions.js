let firstName = 'Antonia';
let lastName = 'Francesca';
const fullName = (first, last) => `${first} ${last}`;
console.log(fullName(firstName, lastName));
document.querySelector('#fullName').textContent = fullName(firstName, lastName);
