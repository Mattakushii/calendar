export default class CalendarGenerator {
    constructor() {
        this.baseDate = new Date();
        this.generatedData;

        this.init();
    }

    getGeneratedData() {
        return this.generatedData;
    }

    generateCellsData(data) {
        let year, month;
        this.generatedData = [];

        if(data) {
            year = data.getFullYear();
            month = data.getMonth();
        } else {
            year = this.baseDate.getFullYear();
            month = this.baseDate.getMonth();
        }

        let fullMonth = new Date(year, month, 1);
        
        for (let i = 0; i < this.getDay(fullMonth); i++) {
            this.generatedData.push('');
        }

        while (fullMonth.getMonth() == month) {
            this.generatedData.push(fullMonth.getDate());
            fullMonth.setDate(fullMonth.getDate() + 1);
        }
        // console.log(this.generatedData)
    }

    getDay(date) {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }

    init() {
        this.generateCellsData()
    }
}