const container = document.getElementById('container');
console.log(container);


for (let i = 0; i < 256; i++)
{
    const div = document.createElement('div');
    div.className = 'grid';
    div.style.width = "80px";
    div.style.height = "80px";
    div.style.backgroundColor = "red";
    div.style.border = "2px solid black";
    div.style.margin = "1px";
    container.appendChild(div);
}

