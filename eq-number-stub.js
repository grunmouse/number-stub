const NumberStub = require('./number-stub.js');

class EqNumberStub extends NumberStub {
	constructor(operator, ...operands){
		this.operator = operator;
		this.operands = operands;
	}
}

module.exports = EqNumberStub;