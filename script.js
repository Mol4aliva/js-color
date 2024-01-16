document.getElementById('colorButton').addEventListener('click', function() {
    const colorInput = document.getElementById('color').value.toLowerCase();

    if (isValidColor(colorInput)) {
        document.body.style.backgroundColor = colorInput;
    } else {
        const modalError = document.getElementById('modalError');
        modalError.innerText = "Invalid color value.";
        $('#myModal').modal('show');
    }
});

function isValidColor(colorInput) {
    const div = document.createElement('div');
    div.style.color = colorInput;
    return div.style.color !== '';
}
