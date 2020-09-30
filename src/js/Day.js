export default class Day {
    constructor(options) {
        this.mounthDay = options.mounthDay;
        this.markup = options.markup;

        this.init()
    }

    getMarkup() {
        return this.markup
    }

    getMounthDay() {
        return this.mounthDay
    }

    init() {
        this.markup.textContent = '';
        this.markup.textContent = this.mounthDay;
    }
}