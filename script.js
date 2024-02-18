const colorPicker = document.getElementById('color-picker');

const div = document.querySelector('div');

colorPicker.addEventListener("input", (event) =>{
    const selectedColor = event.target.value;
    div.style.backgroundColor = selectedColor;
});