

const container = document.querySelector('.container');

// create Grid function 


function createGrid(val){

    for (i=0; i<16; i++){
        const row = document.createElement('div');
        container.appendChild(row);

        for(j=0; j<16; j++){
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }

    val = val
}

createGrid(16);

const cellList = document.querySelectorAll('.column');

cellList.forEach(column => {
    column.addEventListener('mouseover', () => {
        column.classList.add('hovered');
    })
})