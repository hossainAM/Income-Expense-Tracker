function getTotalIncome() {
    //get Total Income
    if (isNaN(inputIncome.value)) {
        console.log('error')
    } else {
        const totalIncome = parseFloat(document.getElementById('inputIncome').value);
        return totalIncome;
    }
}

function getTotalExpense() {
    //get Total Expense
    const foodExpense = parseFloat(document.getElementById('inputFood').value);
    const rentExpense = parseFloat(document.getElementById('inputRent').value);
    const clothExpense = parseFloat(document.getElementById('inputCloth').value);
    const totalExpense = foodExpense + rentExpense + clothExpense;
    return totalExpense;
}

const calculateTotal = document.getElementById('buttonCalc').addEventListener('click', function () {
    //show Total Expense
    let showTotalExpense = document.getElementById('totalExpense');
    showTotalExpense.innerText = getTotalExpense();
    //get total balance
    const balance = getTotalIncome() - getTotalExpense();
    const showBalance = document.getElementById('balance');
    showBalance.innerText = balance;
});

const save = document.getElementById('buttonSave').addEventListener('click', function () {
    //get savings
    const percentSave = document.getElementById('inputSave').value;
    const savingAmount = document.getElementById('savingAmount');
    const totalSaving = getTotalIncome() * parseFloat(percentSave) / 100;
    savingAmount.innerText = totalSaving;
    //get remaining balance
    const remainingBalance = document.getElementById('remainingBalance');
    const balance = document.getElementById('balance').innerText;
    const netBalance = parseFloat(balance) - parseFloat(totalSaving);
    remainingBalance.innerText = netBalance;
});