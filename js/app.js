// INCOME BLOCK
function getTotalIncome() {
    //get Total Income
    if (isNaN(inputIncome.value) || inputIncome.value < 0) {
        alert('input is not a number or negative. please provide valid input');
    } else {
        const totalIncome = parseFloat(document.getElementById('inputIncome').value);
        return totalIncome;
    }
};

// EXPENSES BLOCK
function getTotalExpense() {
    //get Total Expense
    let input = inputFood.value || inputRent.value || inputCloth.value;
    if (isNaN(input) || input < 0) {
        alert('input is not a number or negative. please provide valid input');
    } else {
        const foodExpense = parseFloat(document.getElementById('inputFood').value);
        const rentExpense = parseFloat(document.getElementById('inputRent').value);
        const clothExpense = parseFloat(document.getElementById('inputCloth').value);
        const totalExpense = foodExpense + rentExpense + clothExpense;
        return totalExpense;
    }
};

// TOTAL EXPENSES & BALANCE BLOCK
const calculateTotal = document.getElementById('buttonCalc').addEventListener('click', function () {
    //show Total Expense
    let showTotalExpense = document.getElementById('totalExpense');
    showTotalExpense.innerText = getTotalExpense();
    //get total balance
    if (showTotalExpense.innerText > getTotalIncome()) {
        alert('you have exceeded your income');
    } {
        const balance = getTotalIncome() - getTotalExpense();
        const showBalance = document.getElementById('balance');
        showBalance.innerText = balance;
    }
});

// SAVINGS & NET BALANCE BLOCK
const save = document.getElementById('buttonSave').addEventListener('click', function () {
    //get savings
    const percentSave = document.getElementById('inputSave').value;
    const savingAmount = document.getElementById('savingAmount');
    const totalSaving = getTotalIncome() * parseFloat(percentSave) / 100;
    savingAmount.innerText = totalSaving;
    //get remaining balance
    if (balance > savingAmount.innerText) {
        alert('you dont have enough balance');
    } else {
        const remainingBalance = document.getElementById('remainingBalance');
        const balance = document.getElementById('balance').innerText;
        const netBalance = parseFloat(balance) - parseFloat(totalSaving);
        remainingBalance.innerText = netBalance;
    }
});