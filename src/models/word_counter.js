const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function (){

};

//word counter has to subscribe to  InputView:text-inputted
//then process the input with getWordCount
//then publish the result on WordCounter:result

WordCounter.prototype.bindEvents = function (){
  PubSub.subscribe("InputView:text-inputted", (event) => {
    // console.log(event.detail);
    const inputtedText = event.detail;
    const result = this.getWordCount(inputtedText);
    // console.log(result);
    PubSub.publish("WordCounter:result", result);
  });
};


WordCounter.prototype.getWordCount = function (inputText) {
  answer = inputText.trim().split(/\s+/).length;
  return answer;
};


module.exports = WordCounter;
