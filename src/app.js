import Sidebar from "./js/Sidebar";
import {SETTINGS} from "../SETTINGS";
import CalendarGenerator from "./js/CalendarGenerator";
import Day from "./js/Day";


class App {
    constructor() {
        //APPLICATION SETTINGS
        this.SETTINGS = SETTINGS;
        //
        this.sidebarData;
        this.generatedData;

        this.daysList;

        this.nextMonthBtn = document.getElementById('arrow_right');
        this.prevMonthBtn = document.getElementById('arrow_left');
        this.dateCells = document.getElementsByClassName('calendar_month_day');

        this.sidebar = new Sidebar({});
        this.generator = new CalendarGenerator();
        this.init();
    }

    updateSidebarData() {
        this.sidebarData = this.sidebar.getAllData();
    }
    
    updateCalendarData() {
        this.generator.generateCellsData(this.sidebarData.date);
        this.generatedData = this.generator.getGeneratedData();
    }

    fillMonth() {
        let data = this.generatedData;
        let target = this.dateCells;
        this.daysList = [];
        this.clearCells();
        for(let i = 0; i < data.length; i++) {
            this.daysList.push(new Day({
                mounthDay: data[i],
                markup: target[i]
            }))
        }
        for(let i = 0; i < this.daysList.length; i++) {
            this.daysList[i].getMarkup().onclick = () => {
                this.selectDate(this.daysList[i].getMounthDay())
            }
        }
    }

    clearCells() {
        for(let i = 0; i < this.dateCells.length; i++) {
            this.dateCells[i].textContent = ''
        }
    }

    selectDate(date) {
        this.sidebar.changeDate(date);
    }

    init() {
        this.updateSidebarData();
        this.updateCalendarData();
        this.fillMonth();
        //init listeners
        this.nextMonthBtn.onclick = () => {
            this.sidebar.nextMonth();
            this.updateSidebarData();
            this.updateCalendarData();
            this.fillMonth();
        }

        this.prevMonthBtn.onclick = () => {
            this.sidebar.prevMonth();
            this.updateSidebarData();
            this.updateCalendarData();
            this.fillMonth();
        }
    }
}

const app = new App();
