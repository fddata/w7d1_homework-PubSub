const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function (){

};

WordCounter.prototype.bindEvents = function (){
  PubSub.subscribe("InputView:text-inputted", (event) => {
    // console.log(event.detail);
    const inputtedText = event.detail;
    const result = this.getWordCount(inputtedText);
    console.log(result);
    PubSub.publish("WordCounter:result", result);
  });
};


WordCounter.prototype.getWordCount = function (inputText) {
  return inputText.split(" ").length;

};


module.exports = WordCounter;
