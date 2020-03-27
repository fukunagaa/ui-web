export default class {
    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }

    get info() {
        return `param1:${this.param1}  param2:${this.param2}`;
    }
}