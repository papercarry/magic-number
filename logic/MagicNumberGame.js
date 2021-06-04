function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

module.exports = class {
    // Constructor method takes in max as parameter.
    constructor(max) {
        // Generate magicNumber from 1 to max - 1 (both inclusive)
        this.magicNumber = getRandomInt(1, max);
        // Set lower and upper bound.
        this.lowerBound = 0;
        this.upperBound = max;
    }

    // Progress method takes in no parameter,
    // returns an array of 2 values, the lower bound and upper bound
    progress() {
        return [this.lowerBound, this.upperBound];
    }
};
