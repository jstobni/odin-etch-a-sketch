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

    const slider = document.querySelector('#size');
    const output = document.querySelector('#sizedisplay');
    output.innerHTML = `${slider.value} x ${slider.value}`;

    slider.oninput = function() {
        output.innerHTML = `${slider.value} x ${slider.value}`;
    }

});

function makeGrid(size) {
    const grid = document.querySelector('#grid')
    
    // Calculate square size
    let squareSize = 500 / size;

    // Place as many rows as the size says
    for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
            const square = document.createElement('div');
            square.className = 'row';
            square.style = `flex: 1 1 ${squareSize}px;`
            square.addEventListener('mouseenter', function(event) {
                // Change background color to black
                event.target.style.backgroundColor = 'black'
                if (!event.target.style.opacity) {
                    event.target.style.opacity = '.20'
                }
                else if (event.target.style.opacity < 1){
                    // Darken by 10% opacity
                    let currentOpacity = window.getComputedStyle(event.target).getPropertyValue("opacity");
                    let opacity = Number(currentOpacity) + Number(.10);
                    event.target.style.opacity = `${opacity}`
                }

            });
            grid.appendChild(square)
        }
    }
}

function removeGrid() {
    const grid = document.querySelector('#grid');
    grid.innerHTML = "";
}