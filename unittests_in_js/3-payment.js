// payments
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const response = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${response}`);
}

module.exports = sendPaymentRequestToApi;
