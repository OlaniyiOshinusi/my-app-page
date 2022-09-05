//console.log("Hello World!");

document.getElementById('temperatureconverter--form').addEventListener('submit', e => {
    e.preventDefault();
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = document.getElementById('fahrenheit').value;
    console.log(celsius, fahrenheit);
})