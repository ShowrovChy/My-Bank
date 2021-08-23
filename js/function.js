// Function 1

function getInputValue(inputId) {
  const getInputField = document.getElementById(inputId);
  const getInputFieldText = getInputField.value;
  const newInputAmount = parseFloat(getInputFieldText);
  getInputField.value = "";
  return newInputAmount;
}

// Function 2
function getTotal(totalId, newInput) {
  const total = document.getElementById(totalId);
  const currentText = total.innerText;
  const currentAmount = parseFloat(currentText);
  total.innerText = currentAmount + newInput;
}

// function 3

function currentBalance() {
  const totalBalance = document.getElementById("balance-total");
  const totalBalanceText = totalBalance.innerText;
  const totalBalanceAmount = parseFloat(totalBalanceText);
  return totalBalanceAmount;
}
// function 4

function getTotalBalance(newAmount, isAdd) {
  const totalBalance = document.getElementById("balance-total");
  const totalBalanceAmount = currentBalance();

  if (isAdd == true) {
    totalBalance.innerText = totalBalanceAmount + newAmount;
  } else {
    totalBalance.innerText = totalBalanceAmount - newAmount;
  }
}
// Deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const newDepositAmount = getInputValue("deposit-input");
    if (newDepositAmount > 0) {
      getTotal("deposit-total", newDepositAmount);
      getTotalBalance(newDepositAmount, true);
    } else {
      alert("Please Enter Positive Value");
    }
  });
// Withdraw

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputValue("withdraw-input");
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance()) {
      getTotal("withdraw-total", newWithdrawAmount);
      getTotalBalance(newWithdrawAmount, false);
    } else {
      alert("Please Enter Valid Amount");
    }
  });
