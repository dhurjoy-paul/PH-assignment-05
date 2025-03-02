function formatNum(num) {
  return num.toString().padStart(2, "0");
}

function getInputValueByID(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function getInnerTextByID(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}

function disableButton(id) {
  const button = document.getElementById(id);
  button.disabled = true;
  button.style.backgroundColor = "hsl(223, 99%, 80%)";
}

function setInnerTextByID(id, value) {
  document.getElementById(id).innerText = value;
}

function checkAllTasksCompleted() {
  const allBtn = document.querySelectorAll(".btn_completed");

  function checkAllDisabled(allBtn) {
    const btnArray = Array.from(allBtn);
    return btnArray.every(function (btn) {
      return btn.disabled;
    });
  }
  const allDisabled = checkAllDisabled(allBtn);
  if (allDisabled) {
    alert("Congrats! You have completed all the current tasks");
  }
}
