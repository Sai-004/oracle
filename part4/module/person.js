class Person{
    ability = "default";
    constructor(pability){
        this.ability = pability
    }
    canwalk(){
        return this.ability;
    }
};

export { Person }
