"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.onclick = calculateBtnClick;
}

function calculateBtnClick() {
    let numberdaysField = Number(document.getElementById("numberdaysField").value);
    let tollTag = document.getElementById("tollTag").checked;
    let gpsTag = document.getElementById("gpsTag").checked;
    let roadsideTag = document.getElementById("roadsideTag").checked;
    let yesPress = document.getElementById("yesPress").checked;

    let total = numberdaysField*29.99;
    let extraPerDay = 0;

    if (tollTag) {
        extraPerDay += 3.95 * numberdaysField;
    }
    if (gpsTag) {
        extraPerDay += 2.95 * numberdaysField;
    }
    if (roadsideTag) {
        extraPerDay += 2.95 * numberdaysField;
    }
    let extraTotal = (total + extraPerDay);

    if (yesPress) {
        extraTotal += total * 0.3
    }


let totalCost = document.getElementById("totalCost");
totalCost.innerHTML = `Total Cost: $${extraTotal.toFixed(2)}`;

let carrentalCost = document.getElementById("carrentalCost")
carrentalCost.innerHTML = `Car Rental: $${total.toFixed(2)}`;

let optionsCost = document.getElementById("optionsCost")
optionsCost.innerHTML = `Options: $${extraPerDay.toFixed(2)}`;

let under25Cost = document.getElementById("under25Cost")
under25Cost.innerHTML = `Total Cost: $${(total*0.3).toFixed(2)}`;

}