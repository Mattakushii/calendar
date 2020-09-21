export default class Month {
    constructor(options) {
        this.monthDays = (options.days instanceof Object) ? options.days : function() {}
    }
}