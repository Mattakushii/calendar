export default class Sidebar{
    constructor(options) {
        this.date = options.date || new Date();
        this.events = options.events || [];
        this.months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        }


        //markup elements
        this.currentMonth = document.getElementById('current_month');
        this.currentDate  = document.getElementById('current_date');

        this.init();
    }

    getAllData() {
        return  {
            date: this.date,
            events: this.events
        };
    }

    nextMonth() {
        this.date.setMonth(this.date.getMonth() + 1, 1);
        this.pasteData();
    }

    prevMonth() {
        this.date.setMonth(this.date.getMonth() - 1, 1);
        this.pasteData();
    }

    pasteData() {
        this.currentMonth.textContent = this.months[this.date.getMonth()];
        this.currentDate.textContent  = this.date.getDate();
    }

    init() {
        this.pasteData();
    }
}