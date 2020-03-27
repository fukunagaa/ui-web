export default class {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    get info() {
        return `id:${this.id}  name:${this.name}`;
    }
}