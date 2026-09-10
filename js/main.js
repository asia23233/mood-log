const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

/// カレンダー生成
function createCalendar(year, month){

  const calendar = document.getElementById("calendar");

  // カレンダー初期化
  calendar.innerHTML ="";

  // 年月表示
  const currentMonthElement = document.getElementById("current-month");
  currentMonthElement.textContent = `${year}年${month + 1}月`;

  // 曜日生成
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  for (let i = 0; i < weekdays.length; i++){
    const day = document.createElement("div");

    day.classList.add("weekday");
    day.textContent = weekdays[i];

    calendar.appendChild(day);
  }

  // 月初設定
  const firstDate = new Date(year, month, 1);
  const firstWeekday = firstDate.getDay();
  for(let i = 0; i < firstWeekday; i++){
    const empty = document.createElement("div");

    calendar.appendChild(empty);
  }

  // 日数設定
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++){
    const date = document.createElement("button");

    date.classList.add("date");
    date.textContent = day;

    calendar. appendChild(date);
  }

}

  // 前月の取得
const prevMonthButton = document.getElementById("prev-month");
prevMonthButton.addEventListener("click", function() {
  currentMonth--;

  if (currentMonth < 0){
    currentMonth = 11;
    currentYear--;
  }

  createCalendar(currentYear, currentMonth);
})

// 翌月の取得
const nextMonthButton = document.getElementById("next-month");
nextMonthButton.addEventListener("click", function() {
  currentMonth++;

  if (currentMonth > 11){
    currentMonth = 0;
    currentYear++;
  }

  createCalendar(currentYear, currentMonth);
})

// 任意の年月の取得
const inputYear = document.getElementById("input-year");
const inputMonth = document.getElementById("input-month");
const showCalendarButton = document.getElementById("show-calendar");

showCalendarButton.addEventListener("click", function() {
  currentYear = Number(inputYear.value);
  currentMonth = Number(inputMonth.value) - 1;

  createCalendar(currentYear, currentMonth);
})


// 最初のカレンダーを表示
createCalendar(currentYear, currentMonth);
