import { Person } from "./person.js";
class Hero extends Person {
    title;
    power;
    secret;
    static version = 1001;
    constructor(title, power, hability, secret) {
        super(hability);
        this.title = title;
        this.power = power;
        this.secret = secret;
    }
    saymessage() {
        return "Hello from " + this.title + " : I will " + this.secret;
    }
    static sayversion() {
        return this.version + " is the current version";
    }
    getsecret() {
        return this.secret;
    }
    setsecret(nmessage) {
        this.secret = nmessage;
    }
}
;
export { Hero };
