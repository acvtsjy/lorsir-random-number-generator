import { mainModule } from "process";

console.log('Random number');

const randomNumber = Math.random();
// generazione numeri pseudo randomici

function RNG(min: number, max: number) {
    const rng = Math.random();

    // rng = 0  -> min
    // rng = 1  -> max  (1*(1-0) + 0)

    return Math.round((rng * (max - min) + min));
}

// function RNGdec(min: number, max: number, precision: number)
// {
//     // codice!
//     const rng = Math.random();
//     return (rng * (max - min) + min).toFixed(precision);
// }
function RNGDec(min: number, max: number, precision: number)
{
    // codice!
    const multFactor = Math.pow(10,precision);    
    return RNG(min * multFactor, max*multFactor) / multFactor;
}
for (let i=0; i<10; i++) {   
    console.log("My random number: " + RNGDec(1,5,2));    
}

console.log(RNGDec(0,5,2));
console.log(RNGDec(0,5,3));
console.log(RNGDec(0,5,4));
    //const randomNumber = Math.trunc(Math.random()  * 10);
