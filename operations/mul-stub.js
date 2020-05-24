const EqNumberStub = require('../eq-number-stub.js');
const {
	operators:{
		add, sub, mul, div, pow,
		neg,
		eq, ne, lt, gt
	},
	symbols: {
		ADD, NEG
	}
} = require('@grunmouse/multioperator-ariphmetic');

class MulStub extends EqNumberStub{
	constructor(a, b){
		super(sub, a, b);
	}

	/**
	 *
	 */
	expand(){

		
		return val;
	}
}

EqNumberStub.mapping.set(mul, MulStub);

module.exports = MulStub;