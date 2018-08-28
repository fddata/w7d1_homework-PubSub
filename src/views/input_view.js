const PubSub = require('../helpers/pub_sub.js');

const InputView = function (){

};


InputView.prototype.bindEvents = function () {

  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.dir);
    // now select the textarea, it has the id 'text'
    const inputtedText = event.target.text.value;
    PubSub.publish('InputView:text-inputted', inputtedText);
  });
};

module.exports = InputView;
