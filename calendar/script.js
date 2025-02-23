const date = new Date();

const rednerCalendar = () => {
    date.setDate(1);


    const monthDays = document.querySelector('.days')

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // display the month
    document.querySelector(".date h1").innerHTML
        = months[date.getMonth()];

    // display "Wed Feb 17 2021" date format
    document.querySelector(".date p").innerHTML
        = new Date().toDateString();

    // display days of the month: when i add this loop the page is unresponsive
    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }


    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`
        monthDays.innerHTML = days;
    }

}



// Make the previous and next month aroows work.
document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    rednerCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    rednerCalendar();
});

rednerCalendar();