function convertTemperature() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("tempUnit").value;
    let output = document.getElementById("output");

    if (isNaN(temp)) {
        output.innerHTML = "Please enter a valid number!";
        return;
    }

    if (unit === "C") {
        let fahrenheit = (temp * 9/5) + 32;
        output.innerHTML = `${temp}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        let celsius = (temp - 32) * 5/9;
        output.innerHTML = `${temp}°F is ${celsius.toFixed(2)}°C`;
    }
}
