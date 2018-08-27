const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function (){

};

WordCounter.prototype.bindEvents = function (){
  PubSub.subscribe("InputView:text-inputted", (event) => {
    // console.log(event.detail);
    const inputtedText = event.detail;
    const result = this.getWordCount(inputtedText);
    // console.log(result);
    PubSub.publish("WordCounter:result", result)
  });
};


WordCounter.prototype.getWordCount = function (inputText) {
//WRITE FUNCTION HERE!!!
};


module.exports = WordCounter;

// PrimeChecker.prototype.bindEvents = function () {
//   PubSub.subscribe("InputView:number-inputted", (event) => {
//     // console.log(event.detail);
//     const inputtedNumber = event.detail;
//     const result = this.numberIsPrime(inputtedNumber);
//     // console.log(result);
//     PubSub.publish("PrimeChecker:result", result);
//   });
// };
//
//
//
//
// PrimeChecker.prototype.numberIsPrime = function(number){
//   for (let i = 2; i < number; i++) {
//     if(number % i === 0){
//       return false;
//     }
//   }
//   return number > 1;
// };
//
// module.exports = PrimeChecker;
