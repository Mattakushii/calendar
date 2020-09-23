import Day from "./Day";

export default class Calendar {
    constructor() {
        this.baseDate = new Date();
        this.cells = document.getElementsByClassName('calendar_month_day');
        this.days;

        this.init();
    }

    fillCells(options) {
        let year = options.year || this.baseDate.getFullYear();
        let month = options.month || this.baseDate.getMonth() + 1;
        let trueMonth = month - 1;
        let daysList = [];
        this.days = [];
        

        let date = new Date(year, trueMonth, 1);
        
        for (let i = 0; i < this.getDay(date); i++) {
            daysList.push('');
        }

        while (date.getMonth() == trueMonth) {
            daysList.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }

        for(let i = 0; i <  daysList.length; i++) {
            this.days.push(new Day({markup: this.cells[i], monthDay:daysList[i]}))
        }
    }

    getDay(date) {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }

    init() {
        this.cells.innerHTML = '';
        this.fillCells({year: 2020, month: 10});
    }
}