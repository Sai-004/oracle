import { Person } from "./person.js";

class Hero extends Person{
    // public
    title = "";
    power = 0;
    static version = 1001;
    #secret = "work on my Secret Mission";
    constructor(htitle,hpower, hability){
        super(hability)
        this.title = htitle;
        this.power = hpower;
    }
    saymessage(){
        return "Hello from "+this.title+" : I will "+this.#secret;
    }
    static sayversion(){
        return this.version+" is the current version"
    }
    get secret(){
        return this.#secret
    }
    set secret(nmessage){
        this.#secret = nmessage
    }
};

       
export { Hero }