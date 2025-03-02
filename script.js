const taskContainer = document.getElementById("task_container");

taskContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn_completed")) {
    const btnCompleted = event.target;

    // task assigned calculation
    const taskNumber = getInnerTextByID("task_number");
    const sum = taskNumber - 1;
    const formattedSum = formatNum(sum);
    setInnerTextByID("task_number", formattedSum);

    // completed task calculation
    const completedNumber = getInnerTextByID("completed_number");
    const total = completedNumber + 1;
    const formattedTotal = formatNum(total);
    setInnerTextByID("completed_number", formattedTotal);

    // disable button
    disableButton(btnCompleted.id);

    // activity log
    const parentDiv = btnCompleted.parentElement.parentElement;
    const h3Text = parentDiv.querySelector("h3").innerText;
    const activityLog = document.getElementById("activity_log");
    const divLog = document.createElement("div");
    divLog.classList.add("bg-[#f4f7ff]", "p-[10px]", "rounded-lg");
    divLog.textContent = `You have Complete The Task ${h3Text} at ${time}`;
    activityLog.appendChild(divLog);

    alert(`Task Completed: ${h3Text} \nBoard updated successfully`);
    checkAllTasksCompleted();
  }
});

// clear history button
const clearHistoryButton = document.getElementById("clear_history_btn");
const activityLog = document.getElementById("activity_log");

clearHistoryButton.addEventListener("click", function () {
  activityLog.replaceChildren();
});
