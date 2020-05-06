const NumberStub = require('./number-stub.js');

class EqNumberStub extends NumberStub {
	constructor(operator, ...operands){
		let Ctor = EqNumberStub.mapping.get(operator);
		if(Ctor && Ctor !== this.constructor){
			return new Ctor(...operands);
		}

		this.operator = operator;
		this.operands = operands;
	}
}

EqNumberStub.mapping = new Map();

module.exports = EqNumberStub;