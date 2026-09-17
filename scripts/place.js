const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16).toFixed(1);
}

const windChill = temperature <= 10 && windSpeed > 4.8
    ? `${calculateWindChill(temperature, windSpeed)} °C`
    : "N/A";

document.querySelector("#windchill").textContent = windChill;
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
