const container = document.querySelector('.container');

for (let i=0; i < 16; i++){
    for(let j=0; j<16; j++){
    const cells = document.createElement('div');
    cells.classList.add('cells');
    container.appendChild(cells);
    }
}

const cellList = document.querySelectorAll('.cells')

cellList.forEach(cells => {
    cells.addEventListener('mouseover', () => {
        cells.classList.add('hover');
    });    
});


