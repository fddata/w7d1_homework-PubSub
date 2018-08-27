const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("WordCounter:result", (event) => {
    const result = event.detail;
    this.updateView(result);
  });
};


ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === 1){
  resultElement.textContent = `You've typed 1 word`;
  }
  else {
    resultElement.textContent = `You've typed ${result} words`;
  }
};



module.exports = ResultView;
