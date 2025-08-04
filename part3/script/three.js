// UNION TYPES 
// let users:(string | [string]) = ;
// let data:(number | boolean | string);
let Ironman = {
    canwalk(msg) {
        console.log(msg);
    },
    canfly(msg) {
        console.log(msg);
    },
};
Ironman.canwalk("i can walk");
Ironman.canfly("i can fly");
export {};
