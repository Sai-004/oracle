import { Person } from "./person.js";

class Hero extends Person{
    static version = 1001;
    constructor(public title:string,public power:number, hability:string, private secret:string){
        super(hability)
    }
    saymessage(){
        return "Hello from "+this.title+" : I will "+this.secret;
    }
    static sayversion(){
        return this.version+" is the current version"
    }
    getsecret(){
        return this.secret
    }
    setsecret(nmessage:string){
        this.secret = nmessage
    }
};

       
export { Hero }