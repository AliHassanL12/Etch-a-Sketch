

const container = document.querySelector('.container');

// create Grid function 


function createGrid(val){

    newSize = 640 / val; 

    for (i=0; i<val; i++){
        const row = document.createElement('div');
        container.appendChild(row);

        for(j=0; j<val; j++){
            const column = document.createElement('div');
            column.classList.add('column');
            column.style.height = newSize + "px";
            column.style.width = newSize + "px";
            row.appendChild(column);
        }
    }
}

createGrid(16);      

//creating button 

const button = document.createElement('button');
button.textContent = 'Choose Size!';
button.classList.add('btn');
document.body.insertBefore(button, container);


//Event method for button

button.addEventListener('click', () => {
    const userInput = prompt('How many squares per size would you like?');
    if (userInput <= 100) {
        container.innerHTML = ' ';
        createGrid(userInput);
        const cellList = document.querySelectorAll('.column');

        cellList.forEach(column => {
        column.addEventListener('mouseover', () => {
            column.classList.add('hovered');
    })
})
    }

    else{
        console.log("Nay, sorry! Either too many or invalid input");
    }
})

const cellList = document.querySelectorAll('.column');

cellList.forEach(column => {
    column.addEventListener('mouseover', () => {
        column.classList.add('hovered');
    })
})