export default class Day {
    constructor(options) {
        this.markup = options.markup;
        
        this.monthDay = options.monthDay;
        this.markup.textContent = this.monthDay;
        
        this.markup.onclick = function() {
            console.log(this.textContent);
        }

        this.events = {
            // 
        }
        //колличество событий
    }

    
}