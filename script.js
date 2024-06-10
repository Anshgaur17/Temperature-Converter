function convertTemperature() {
    let inputTemp = document.getElementById('inputTemp').value;
    let inputScale = document.getElementById('inputScale').value;
    let output = document.getElementById('output');

    if (inputTemp === '') {
        output.textContent = 'Please enter a temperature.';
        return;
    }

    inputTemp = parseFloat(inputTemp);

    let result;
    if (inputScale === 'celsius') {
        result = (inputTemp * 9/5) + 32;
        output.textContent = `${inputTemp}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (inputTemp - 32) * 5/9;
        output.textContent = `${inputTemp}°F is ${result.toFixed(2)}°C`;
    }
}