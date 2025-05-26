document.addEventListener('DOMContentLoaded', function() {
    // Default to a 16 x 16 grid
    makeGrid(16);

    // Allow resizing of the grid through the form
    let resizeForm = document.querySelector('#resize');
    resizeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let newSize = document.querySelector('#size').value;
        removeGrid();
        makeGrid(newSize)
    });
});

function makeGrid(size) {
    const grid = document.querySelector('#grid')
    
    // Calculate square size (with 2px total border)
    let squareSize = (680 - (size * 2)) / size;

    // Place as many rows as the size says
    for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
            const square = document.createElement('div');
            square.className = 'row';
            square.style = `flex: 1 1 ${squareSize}px;`
            square.addEventListener('mouseenter', function(event) {
                event.target.style.backgroundColor = 'black'
            });
            grid.appendChild(square)
        }
    }
}

function removeGrid() {
    const grid = document.querySelector('#grid');
    grid.innerHTML = "";
}