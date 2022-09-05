//import { convertToFahrenheit } from './logic.js';

//document.getElementById('temperatureconverter--form').addEventListener('celsius', e => {
//    e.preventDefault();
//    var celsius = document.getElementById('celsius').value;
//    var fahrenheit = document.getElementById('fahrenheit').value;
 //   const result = document.getElementById('result');
 //   result.value = convertTemp(celsius, fahrenheit);
    
    
//})


const convertToFahrenheit = () =>{
    var celsius = parseFloat(document.getElementById("celsius").value);

    var fahrenheitResult = (parseFloat(celsius) * (9/5)) + 32;
    var a = fahrenheitResult.toFixed(2);

    document.getElementById("celsius").value = celsius;
    document.getElementById("fahrenheit").value = a;
}

const convertToCelsius = () =>{
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    var celsiusResult = (parseFloat(fahrenheit) - 32) * (5/9);
    var b = celsiusResult.toFixed(2);

    document.getElementById("celsius").value = b;
    document.getElementById("fahrenheit").value = fahrenheit;
}