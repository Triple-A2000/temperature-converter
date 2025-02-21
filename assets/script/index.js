"use strict";

const tempInput = document.querySelector(".temp-input");
const convertBtn = document.querySelector(".convert-btn");
const toF = document.querySelector(".to-fahrenheit");
const toC = document.querySelector(".to-celsius");
const output = document.querySelector(".output p");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");

function resetInput() {
    tempInput.value = "";
}

function updatePlaceholder() {
    if (toF.checked) {
        tempInput.placeholder = "Enter temperature (°C)";
    } else if (toC.checked) {
        tempInput.placeholder = "Enter temperature (°F)";
    }
}

toF.addEventListener("change", updatePlaceholder);
toC.addEventListener("change", updatePlaceholder);

function isValidNumber(value) {
    return value !== "" && !isNaN(value);
}

function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

convertBtn.addEventListener("click", function () {
    let inputValue = tempInput.value.trim();

    if (!isValidNumber(inputValue)) {
        output.innerText = "Please enter a valid number";
        return;
    }

    let num = parseFloat(inputValue);
    if (toF.checked) {
        let convertedValue = convertToFahrenheit(num);
        output.innerText = `${num}°C = ${convertedValue.toFixed(1)}°F`;
    } else if (toC.checked) {
        let convertedValue = convertToCelsius(num);
        output.innerText = `${num}°F = ${convertedValue.toFixed(1)}°C`;
    }
});

themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
});

window.addEventListener("load", function () {
    resetInput();
    updatePlaceholder();
});
