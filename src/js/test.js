export default class Test {
    constructor(options) {
        this.obj = options.obj;


        this.obj.onclick = function() {
            console.log(this.innerHTML)
        }
    }
}