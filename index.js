const bill = document.getElementById("bill-input");
const tipButtons = document.querySelectorAll(".tip-button");
const customTip = document.getElementById("custom-tip");
const peopleCount = document.getElementById("number-of-people");
const calculatedTip = document.getElementById("calculated-tip-amount");
const calculatedTotal = document.getElementById("calculated-total-amount")
const resetButton = document.getElementById("reset-button");
const zeroInput = document.getElementById("zero-input");

let billAmount = 0;
let tipAmount = 0;
let numberOfPeople = 0;

bill.addEventListener("change", () => {
    billAmount = bill.value;
    calculate();
});

tipButtons.forEach((tip) => {
    tip.addEventListener("click", () => {
        tipAmount = tip.value;
        calculate();
    });
});

customTip.addEventListener("change", () => {
    tipAmount = parseInt(customTip.value) / 100;
    calculate();
});

peopleCount.addEventListener("change", () => {
    if (peopleCount.value == 0){
        peopleCount.style.outline = "2px solid orange";
        zeroInput.classList.remove("hidden");
    } else {
        numberOfPeople = peopleCount.value;
        calculate();
        peopleCount.style.outline = "none";
        zeroInput.classList.add("hidden");
    }
});

resetButton.addEventListener("click" , () => {
    billAmount = 0;
    tipAmount = 0;
    numberOfPeople = 0;
    bill.value = bill.defaultValue;
    customTip.value = customTip.defaultValue;
    peopleCount.value = peopleCount.defaultValue;
    calculatedTip.innerHTML = "0.00";
    calculatedTotal.innerHTML = "0.00";
});

function calculate(){
    if (billAmount !== 0 && tipAmount !== 0 && numberOfPeople !== 0){
        let tipAmountPer = billAmount * tipAmount / numberOfPeople;
        let totalAmountPer = (1 + parseInt(tipAmount)) * billAmount / numberOfPeople + tipAmountPer;
        tipAmountPer = tipAmountPer.toFixed(2);
        totalAmountPer = totalAmountPer.toFixed(2);
        calculatedTip.innerHTML = tipAmountPer;
        calculatedTotal.innerHTML = totalAmountPer;
    }
}