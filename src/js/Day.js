export default class Day {
    constructor(options) {
        this.markup = options.markup;
        this.monthDay = options.monthDay;
        this.markup.innerHTML = this.monthDay;
        
        this.markup.onclick = function() {
            console.log(this.textContent)
        }
    }


}