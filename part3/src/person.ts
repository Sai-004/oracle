class Person{
    constructor(public ability:string){
        // empty
    }
    canwalk():string{
        return this.ability;
    }
};
export { Person }