export default class Sidebar{
    constructor() {
        this.nextMonthBtn = document.getElementById('arrow_right');
        this.prevMonthBtn = document.getElementById('arrow_left');
        this.currentDate = document.getElementById('current_date');
        this.currentMonth = document.getElementById('current_month');


        this.date = new Date();
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
        };

        this.callbacks = {
            ////callbacks
        }

        this.nextMonthBtn.onclick = ()=> {
            // super.check()
        }

        this.init();
    }

    nextMonth() {

    }

    prevMonth() {

    }

    fillDate() {
        this.currentDate.innerHTML = this.date.getDate();
        this.currentMonth.innerHTML = this.months[this.date.getMonth()];
    }

    init() {
        this.fillDate();
    }
}