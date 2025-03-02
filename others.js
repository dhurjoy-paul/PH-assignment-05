// toggle button code
const btnIndex = document.getElementById("btn_index");
btnIndex.addEventListener("click", function () {
  window.location.href = "./blog.html";
});
// ===================================================

// current date and time code
const liveDayName = document.getElementById("live_day_name");
const liveDate = document.getElementById("live_date");
// const liveTime = document.getElementById("live_time");

const today = new Date();
const weekdayName = today.toLocaleDateString("en-US", { weekday: "short" });
const day = String(today.getDate()).padStart(2, "0");
const month = today.toLocaleDateString("en-US", { month: "short" });
const year = today.getFullYear();
const time = today.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
});

liveDayName.textContent = `${weekdayName} ,`;
liveDate.textContent = `${month} ${day} ${year}`;
// liveTime.textContent = `${time}`;
// ===================================================

// color wheel code
document.body.style.backgroundColor = "#f4f7ff";
const colors = [
  "#121212",
  "#282828",
  "#3f3f3f",
  "#2c3e50",
  "#95a5a6",
  "#3498db",
  "#1abc9c",
  "#34495e",
  "#16a085",
  "#bdc3c7",
  "#000033",
  "#000055",
  "#0a192f",
  "#172554",
  "#2f4f4f",
  "#222831",
];
const btnColor = document.getElementById("btn_color");
btnColor.addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
// ===================================================
