function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

module.exports = class {

    constructor(max){
        this.magicNumber = getRandomInt(1,max);
        this.lowerBound = 0;
        this.upperBound = max;
    }

    progress() {
        return[this.lowerBound,this.upperBound]
    }

    guess(attempt){

        if(attempt < this.magicNumber){
            this.lowerBound = Math.max(this.lowerBound,attempt);
        }
        else if(attempt > this.magicNumber){
            this.upperBound = Math.min(this.upperBound,attempt);
        }
        else{
            this.upperBound = attempt;
            this.lowerBound = attempt;
        }

        return(this.progress());
    }

};
