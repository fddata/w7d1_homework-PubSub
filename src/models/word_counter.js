const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function (){

};

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
  //this method adds a secondary filtering step to remove all muliple spaces
  // arrayWithSpaces counts consecutive spaces as words otherwise!
  arrayWithSpaces = inputText.split(" ");
  // console.log(arrayWithSpaces.length);
  arrayNoSpaces = arrayWithSpaces.filter((e) => {
    return e !== '';
  });
  // console.log(arrayNoSpaces);
  return arrayNoSpaces.length;
};


module.exports = WordCounter;
