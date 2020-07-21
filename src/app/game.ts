import {Die} from './die';

export class Game {

        public dice : Die[];

    constructor(numberOfDice = 1) {
        console.log("constructor() is called");
        console.log(`numberOfDice = ${numberOfDice}`);
        console.assert(numberOfDice > 0, "the numberOfDice must be > 0");
        
        if(numberOfDice <= 0){
            throw new Error("The number of dice must be positive");
        }
        this.dice = [];
        for(let i = 0; i < numberOfDice; i++){
            this.dice.push(new Die(i));
        }
    }
    
    rollDice(){
        console.log("rollDice() is called");
        this.dice.forEach(die => die.rollDie());
    }
    get total(){
        console.log("get total() is called");
        let sum = 0;
        for(let die of this.dice){
            sum += die.side;
        }
        return sum;
       
    }
    get numberOfDice(){
        console.log("get numberOfDice() is called");
        return this.dice.length;
    }
    get sides(){
        let data = [];
        for(let die of this.dice){
            data.push(die.side);
        }
        return data;
    }
    set sides(data){
        this.dice = [];
        data.forEach(side => this.dice.push(new Die(side)));
    }



}