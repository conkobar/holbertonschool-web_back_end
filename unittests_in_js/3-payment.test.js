// test suite with sinon spy
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('checks to see if the math used in sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber("SUM", 100, 20)', () => {
    // make the desired response
    const res = sendPaymentRequestToApi(100, 20);
    // create the spies
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');
    // watch for the spies
    expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledWithExactly('The total is: 120')).to.be.true;
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(res);
    // restore the spied methods
    spyUtils.restore();
    spyConsole.restore();
  });
});
