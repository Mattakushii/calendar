import Calendar from "./js/CalendarGenerator";
import Sidebar from "./js/Sidebar"
import Test from "./js/test";

class App {
    constructor() {
        this.kek = document.getElementById('prek');
        this.calendar = new Calendar();
        this.sidebar = new Sidebar();
        this.test = new Test({obj:this.kek})
    }
}

const app = new App();
