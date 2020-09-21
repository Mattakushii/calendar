import Day from "./Day";

export default class Calendar {
    constructor() {
        this.baseDate = new Date();
        this.calendarPosition = document.getElementsByClassName('calendar_month_day');
        this.days;

        this.init();
    }

    fillCells(options) {
        let year = options.year || this.baseDate.getFullYear();
        let month = options.month || this.baseDate.getMonth() + 1;
        let trueMonth = month - 1;
        this.calendarData = [];
        this.days = [];
        

        let date = new Date(year, trueMonth, 1);
        
        for (let i = 0; i < this.getDay(date); i++) {
            this.calendarData.push('');
        }

        while (date.getMonth() == trueMonth) {
            let day = new Day({monthDay: date.getDate()});
            this.days.push(day);
            this.calendarData.push(day.getMonthDay());
            date.setDate(date.getDate() + 1);
        }

        for(let i = 0; i < this.calendarData.length; i++) {
            this.calendarPosition[i].innerHTML = this.calendarData[i];
        }
    }

    getDay(date) {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }

    init() {
        this.calendarPosition.innerHTML = '';
        this.fillCells({});
    }
}