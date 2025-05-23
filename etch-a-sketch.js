document.addEventListener('DOMContentLoaded', function() {
    makeGrid(16);
});

function makeGrid(size) {
    let grid = document.querySelector('#grid')
    // Place as many rows as the size says
    for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
            grid.innerHTML += "<div class=\"row\"></div>"
        }
    }
}

