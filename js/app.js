// INCOME BLOCK
function getTotalIncome() {
    const totalIncome = parseFloat(document.getElementById('inputIncome').value);
    if (isNaN(totalIncome) || totalIncome <= 0) {
        alert('input is not a number or negative. please provide valid input');
        return false;
    }
    return totalIncome;
};

// EXPENSES BLOCK
function getTotalExpense() {
    const foodExpense = parseFloat(document.getElementById('inputFood').value);
    const rentExpense = parseFloat(document.getElementById('inputRent').value);
    const clothExpense = parseFloat(document.getElementById('inputCloth').value);

    if ((isNaN(foodExpense) || foodExpense <= 0) || (isNaN(rentExpense) || rentExpense <= 0) || (isNaN(clothExpense) || clothExpense <= 0)) {
        alert('input is not a number or negative. please provide valid input');
        return false;
    }

    const totalExpense = foodExpense + rentExpense + clothExpense;

    return totalExpense;
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
    //get remaining balanc
    const balance = document.getElementById('balance').innerText;
    if (balance < totalSaving) {
        alert('you dont have sufficient balance');
    }
    const remainingBalance = document.getElementById('remainingBalance');
    const netBalance = parseFloat(balance) - parseFloat(totalSaving);
    remainingBalance.innerText = netBalance;

});