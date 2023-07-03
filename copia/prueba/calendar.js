// calendar.js
const calendar = document.querySelector('.calendar');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
};

const generateCalendar = (month, year) => {
    const calendarDays = calendar.querySelector('.calendar-days');
    const calendarHeaderYear = calendar.querySelector('#year');

    const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    calendarDays.innerHTML = '';

    const currentDate = new Date();
    if (month > 11 || month < 0) month = currentDate.getMonth();
    if (!year) year = currentDate.getFullYear();

    const currentMonth = `${monthNames[month]}`;
    monthPicker.innerHTML = currentMonth;
    calendarHeaderYear.innerHTML = year;

    const firstDay = new Date(year, month, 1);

    for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
        const day = document.createElement('div');
        if (i >= firstDay.getDay()) {
            day.classList.add('calendar-day-hover');
            day.innerHTML = i - firstDay.getDay() + 1;
            day.innerHTML += `<span></span>
                        <span></span>
                        <span></span>
                        <span></span>`;
            if (i - firstDay.getDay() + 1 === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()) {
                day.classList.add('curr-date');
            }
        }
        calendarDays.appendChild(day);
    }
};

const monthList = calendar.querySelector('.month-list');

monthNames.forEach((month, index) => {
    const monthElement = document.createElement('div');
    monthElement.innerHTML = `<div>${month}</div>`;
    monthElement.addEventListener('click', () => {
        monthList.classList.remove('show');
        generateCalendar(index, new Date().getFullYear());
    });
    monthList.appendChild(monthElement);
});

const monthPicker = calendar.querySelector('#month-picker');
monthPicker.addEventListener('click', () => {
    monthList.classList.add('show');
});

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

generateCalendar(currentMonth, currentYear);
