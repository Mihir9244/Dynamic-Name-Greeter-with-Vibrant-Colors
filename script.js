function greetUser() {
    let name = document.getElementById('name-input').value;
    if (name) {
        document.getElementById('user-name').textContent = name;
        document.getElementById('greeting-message').style.display = 'block';
        document.getElementById('color-button').style.display = 'inline-block';
    }
}

function changeTextColor() {
    let colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'aqua'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('greeting-message').style.color = randomColor;
}
