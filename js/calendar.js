const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const currentMonthText = document.getElementById("current-month");
const calendarDates = document.getElementById("calendar-dates");

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    currentMonthText.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });

    calendarDates.innerHTML = "";

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDate = document.createElement("div");
        emptyDate.classList.add("calendar-date", "empty");
        calendarDates.appendChild(emptyDate);
    }

    for (let date = 1; date <= lastDateOfMonth; date++) {
        const calendarDate = document.createElement("div");
        calendarDate.classList.add("calendar-date");
        calendarDate.textContent = date;
        calendarDates.appendChild(calendarDate);
    }
}

prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

renderCalendar();
