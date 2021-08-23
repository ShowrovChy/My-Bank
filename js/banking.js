document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInputField = document.getElementById("deposit-input");
    const depositInputFieldText = depositInputField.value;
    const newDepositAmount = parseFloat(depositInputFieldText);

    if (newDepositAmount > 0) {
      const totalDeposit = document.getElementById("deposit-total");
      const currentDepositAmountText = totalDeposit.innerText;
      const currentDepositAmount = parseFloat(currentDepositAmountText);
      totalDeposit.innerText = currentDepositAmount + newDepositAmount;

      const totalBalance = document.getElementById("balance-total");
      const totalBalanceText = totalBalance.innerText;
      const totalBalanceAmount = parseFloat(totalBalanceText);
      totalBalance.innerText = totalBalanceAmount + newDepositAmount;
    } else {
      alert("Invalid Amount");
    }
    depositInputField.value = "";
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInputField = document.getElementById("withdraw-input");
    const withdrawInputFieldText = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(withdrawInputFieldText);
    const totalBalance = document.getElementById("balance-total");

    if (newWithdrawAmount > 0 && newWithdrawAmount < totalBalance.innerText) {
      const totalWithdraw = document.getElementById("withdraw-total");
      const currentWithdrawAmountText = totalWithdraw.innerText;
      const currentWithdrawAmount = parseFloat(currentWithdrawAmountText);
      totalWithdraw.innerText = currentWithdrawAmount + newWithdrawAmount;

      const totalBalance = document.getElementById("balance-total");
      const totalBalanceText = totalBalance.innerText;
      const totalBalanceAmount = parseFloat(totalBalanceText);
      totalBalance.innerText = totalBalanceAmount - newWithdrawAmount;
    } else {
      alert("Invalid Amount ");
    }

    withdrawInputField.value = "";
  });
