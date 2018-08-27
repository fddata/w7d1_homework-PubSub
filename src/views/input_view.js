const PubSub = require('../helpers/pub_sub.js');

const InputView = function (){

};



InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#text');
  input.addEventListener('input', (event) => {
    const inputtedText = event.target.value;
    console.log('inputtedText', inputtedText);
    PubSub.publish('InputVie:text-inputted', inputtedText);
  });
};

module.exports = InputView;



// const PubSub = require('../helpers/pub_sub.js');
//
// const InputView = function () {
//
// };
//
//
// InputView.prototype.bindEvents = function () {
//
//   const input = document.querySelector('#number');
//   input.addEventListener('input', (event) => {
//     const inputtedNumber = event.target.value;
//     // console.log('inputted number', inputtedNumber);
//     PubSub.publish('InputView:number-inputted', inputtedNumber);
//   } );
// };
//
//
// module.exports = InputView;
