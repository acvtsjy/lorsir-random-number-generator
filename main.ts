import { mainModule } from "process";

console.log('Random number');

const randomNumber = Math.random();
// generazione numeri pseudo randomici
function RNGdec(min: number, max: number, precision: number)
{
   
    const multFactor = Math.pow(10,precision);    
    return RNG(min * multFactor, max*multFactor) / multFactor;
}

function RNG(min: number, max: number) {
    const rng = Math.random();
    return Math.trunc((rng * (max - min) + min));
}

function RNGSequance(len: number, min: number, max: number) {

    if (len > (max-min)) {
        throw new Error(`Cannot find ${len} numbers between ${min} and ${max}`);        
    }

    const res: number[] = [];

    while (res.length < len) {
        const rn = RNG(min, max);
        if (res.includes(rn)){
            continue;
        }
        res.push(rn);
    }
    return res;
}

const route = ['Bari', 'Cagliari', 'firenze', 'Genova', 'Milano', 'napoli', 'Palermo', 'Roma', 'torino', 'Venezia', 'Nazionale'];

const estrazioni: {[ruota: string]: number[] } = {};


for (const ruota of route) {
    const estrazione = RNGSequance(5,0,90);//,1,100);

    estrazioni[ruota] = estrazione;
    
    
}
console.log(JSON.stringify(estrazioni,null, 2));