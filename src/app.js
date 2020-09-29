import Sidebar from "./js/Sidebar";
import {SETTINGS} from "../SETTINGS";
import CalendarGenerator from "./js/CalendarGenerator";


class App {
    constructor() {
        //APPLICATION SETTINGS
        this.SETTINGS = SETTINGS;
        //
        this.sidebarData;
        this.generatedData;

        this.nextMonthBtn = document.getElementById('arrow_right');
        this.prevMonthBtn = document.getElementById('arrow_left');
        this.dateCells = document.getElementsByClassName('calendar_month_day');
        this.sidebar = new Sidebar({});
        this.generator = new CalendarGenerator()

        this.init();
    }

    fillCells() {

        this.generatedData = this.generator.getGeneratedData();
        // for(let i = 0; i <  data.length; i++) {
        //     this.days.push(new Day({markup: this.cells[i], monthDay:daysList[i]}))
        // } 
    }

    updateSidebarData() {
        this.sidebarData = this.sidebar.getAllData();
    }
    
    updateCalendarData() {
        this.generator.generateCellsData(this.sidebarData.date);
    }



    init() {
        this.updateSidebarData();
        //init listeners
        this.nextMonthBtn.onclick = () => {
            this.sidebar.nextMonth();
            this.updateSidebarData();
            this.updateCalendarData();
        }

        this.prevMonthBtn.onclick = () => {
            this.sidebar.prevMonth();
            this.updateSidebarData();
            this.updateCalendarData()
        }


    }
}

const app = new App();
