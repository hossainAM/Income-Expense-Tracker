function getTotal() {
    //get Income
    const inputIncome = document.getElementById('inputIncome');
    const totalIncome = inputIncome.value;
    //get Expense
    const inputFood = document.getElementById('inputFood');
    const foodExpense = inputFood.value;
    const inputRent = document.getElementById('inputRent');
    const rentExpense = inputRent.value;
    const inputCloth = document.getElementById('inputCloth');
    const clothExpense = inputCloth.value;
    //show total expense
    const totalExpense = parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clothExpense);
    let showTotalExpense = document.getElementById('totalExpense');
    showTotalExpense.innerText = totalExpense;
    //get balance
    const balance = parseFloat(totalIncome) - totalExpense;
    const showBalance = document.getElementById('balance');
    showBalance.innerText = balance;
}

const calculateTotal = document.getElementById('buttonCalc').addEventListener('click', function () {
    // //get Income
    // const inputIncome = document.getElementById('inputIncome');
    // const totalIncome = inputIncome.value;
    // //get Expense
    // const inputFood = document.getElementById('inputFood');
    // const foodExpense = inputFood.value;
    // const inputRent = document.getElementById('inputRent');
    // const rentExpense = inputRent.value;
    // const inputCloth = document.getElementById('inputCloth');
    // const clothExpense = inputCloth.value;
    // //show total expense
    // const totalExpense = parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clothExpense);
    // let showTotalExpense = document.getElementById('totalExpense');
    // showTotalExpense.innerText = totalExpense;
    // //get balance
    // const balance = parseFloat(totalIncome) - totalExpense;
    // const showBalance = document.getElementById('balance');
    // showBalance.innerText = balance;
    getTotal();
});

const save = document.getElementById('buttonSave').addEventListener('click', function () {
    //get savings
    const percentSave = document.getElementById('inputSave').value;
    const savingAmount = document.getElementById('savingAmount');
    const totalIncome = document.getElementById('inputIncome').value;
    const totalSaving = (parseFloat(totalIncome) * parseFloat(percentSave)) / 100;
    savingAmount.innerText = totalSaving;
    //get remaining balance
    const remainingBalance = document.getElementById('remainingBalance');
    const balance = document.getElementById('balance').innerText;
    const netBalance = parseFloat(balance) - parseFloat(totalSaving);
    remainingBalance.innerText = netBalance;
});