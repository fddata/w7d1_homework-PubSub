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
  resultElement.textContent = ("You have entered ", result, " words");


  //
  // if(result === 1){
  // resultElement.textContent = `You have entered ${result} word`};
  // else {
  //   resultElement.textContent = `You have entered ${result} words`;
  // }
};



module.exports = ResultView;





// const PubSub = require('../helpers/pub_sub.js');
//
// const ResultView = function () {
//
// };
//
// ResultView.prototype.bindEvents = function () {
//   PubSub.subscribe("PrimeChecker:result", (event) => {
//     const result = event.detail;
//     this.updateView(result);
//   });
// };
//
//
// ResultView.prototype.updateView = function (result) {
//   const resultElement = document.querySelector('#result');
//   if(result){
//     resultElement.textContent = "Yes, it's a prime number!";
//   }
//   else {
//     resultElement.textContent = "No, it is not a prime number!";
//   }
// };
//
//
//
// module.exports = ResultView;
