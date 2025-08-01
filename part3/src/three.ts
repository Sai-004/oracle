// UNION TYPES 
// let users:(string | [string]) = ;
// let data:(number | boolean | string);

// TUPLE TYPES 
// let herodata:[string, number] = ["ironman",5]

// ENUMS TYPE
/* 
enum Movies {BatmanBegins=5,TheDarkKnight,TheDarkKnightRaises};
console.log(Movies.BatmanBegins);// 5
console.log(Movies.TheDarkKnightRaises);// 7 
*/
/* 
enum Avengers {first="ironman",second="hulk",third="thor"};
enum Movies {BatmanBegins=5,TheDarkKnight,TheDarkKnightRaises};

console.log(Avengers.third);
console.log(Movies[6]) 
*/

// CUSTOM TYPES 
/* 
let hero : {
    title : string,
    power : number,
    movies? : string[]
} = {
    title : "Ironman",
    power : 7
} 
*/

/* 
type HeroType = {
    title : string,
    power : number,
    movies? : string[]
}

let hero : HeroType = {
    title : "Ironman",
    power : 7
}
*/

// intersection 
type Person = {
    canwalk : (msg:string) => void
}
type ActionHero = {
    canfly : (msg:string) => void
}
type NewHero = Person & ActionHero;

let Ironman : NewHero = {
    canwalk(msg) {
        console.log(msg)
    },
    canfly(msg) {
        console.log(msg)
    },
};

Ironman.canwalk("i can walk");
Ironman.canfly("i can fly");
