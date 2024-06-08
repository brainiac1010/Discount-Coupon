// Function to get the value from an input field by its ID, parse it as a float, and clear the input field
function getInputValue(inputId) {
    let inputField = document.getElementById(inputId);
    let inputValueStr = inputField.value;
    let inputValue = parseFloat(inputValueStr);
    inputField.value = ''; // Clear the input field
    return isNaN(inputValue) || inputValue < 0 ? 0 : inputValue; // Return 0 if NaN or negative
}

// Function to get the value of an element's inner text by its ID, parse it as a float
function getElementValueById(elementId) {
    let displayElement = document.getElementById(elementId);
    let elementValueStr = displayElement.innerText;
    let elementValue = parseFloat(elementValueStr);
    return isNaN(elementValue) ? 0 : elementValue; // Return 0 if NaN
}

// Function to set the inner text of an element by its ID
function setTextElementValueById(elementId, newValue) {
    let displayElement = document.getElementById(elementId);
    displayElement.innerText = newValue.toFixed(2); // Ensure two decimal places
}

// Event listener for deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    let newDeposit = getInputValue('deposit-field');
    if (newDeposit > 0) {
        let currentDepositTotal = getElementValueById('Deposit-total');
        let updatedDepositTotal = newDeposit + currentDepositTotal;
        setTextElementValueById('Deposit-total', updatedDepositTotal);

        let currentBalanceTotal = getElementValueById('balance-total');
        let updatedBalanceTotal = newDeposit + currentBalanceTotal;
        setTextElementValueById('balance-total', updatedBalanceTotal);
    } else {
        alert('Please enter a positive deposit amount.');
    }
});

// Event listener for withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    let newWithdraw = getInputValue('withdraw-field');
    let currentBalanceTotal = getElementValueById('balance-total');

    if (newWithdraw > 0 && newWithdraw <= currentBalanceTotal) {
        let currentWithdrawTotal = getElementValueById('total-withdraw');
        let updatedWithdrawTotal = newWithdraw + currentWithdrawTotal;
        setTextElementValueById('total-withdraw', updatedWithdrawTotal);

        let updatedBalanceTotal = currentBalanceTotal - newWithdraw;
        setTextElementValueById('balance-total', updatedBalanceTotal);
    } else if (newWithdraw > currentBalanceTotal) {
        alert('Insufficient balance for the withdrawal.');
    } else {
        alert('Please enter a positive withdrawal amount.');
    }
});
