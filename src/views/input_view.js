const PubSub = require('../helpers/pub_sub.js');

const InputView = function (){

};


// need to add a way to remove multiple spaces from the result.

InputView.prototype.bindEvents = function () {

  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputTextArea = document.querySelector('#text');
    const inputtedText = inputTextArea.value;
    PubSub.publish('InputView:text-inputted', inputtedText);
  });
};

module.exports = InputView;
