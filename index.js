//console.log("Hello World!");

document.getElementById('temperatureconverter--form').addEventListener('submit', e => {
    e.preventDefault();
    const celsius = document.getElementById('celsius').value;
    console.log(celsius);
})