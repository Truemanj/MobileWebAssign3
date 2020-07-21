export class Die {
    public roll : number;
    public imgSrc: string;

    constructor(roll) {
        this.roll = roll;
        this.imgSrc = `assets/images/dice/side_${roll}.png`;
    }

    public rollDie() {
        console.log("rollDie() is called");
        this.roll = Math.floor(1 + 6 * Math.random());
    }

    get side(){
        console.log("get side() is called");
        return this.roll;
    }
    set side(roll){
        console.log("set side() is called");
        console.log(`side = ${roll}`);
        console.assert(roll > 0, "side must be > 0");
        console.assert(roll <= 6, "side must be <= 6");
        this.roll = roll;
    }
}