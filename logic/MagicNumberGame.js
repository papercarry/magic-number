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

    // Guess method takes in 1 parameter, the attempt.
    guess(attempt) {
        if (attempt < this.magicNumber) {
            // if the attempt is lesser than the magic number, update lower bound.
            this.lowerBound = Math.max(this.lowerBound, attempt);
        } else if (attempt > this.magicNumber) {
            // if the attempt is greater than the magic number, update upper bound.
            this.upperBound = Math.min(this.upperBound, attempt);
        } else {
            // if the attempt is the magic number, set both bound to the magic number.
            this.lowerBound = this.magicNumber;
            this.upperBound = this.magicNumber;
        }
        // returns the progress
        return this.progress();
    }
};
