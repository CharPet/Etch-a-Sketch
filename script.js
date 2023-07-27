const container = document.getElementById('container');
// console.log(container);

let n = 1;
for (let i = 0; i < 256; i++)
{
   
    const div = document.createElement('div');
    div.className = 'grid-cell';
    div.textContent = n;
    container.appendChild(div);
    n++;
}

const button = document.querySelector('button');
const userResponseWidth = prompt('Enter the width of the grid (<=100)');

if (userResponseWidth !== null && userResponseWidth > 0 && userResponseWidth <= 100)
{

}

const changeGrid = () => {
    = userResponse;
}

button.addEventListener('click', userResponseWidth)