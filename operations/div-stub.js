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

class DivStub extends EqNumberStub{
	constructor(a, b){
		super(sub, a, b);
	}

	expand(){

		
		return val;
	}
}

EqNumberStub.mapping.set(div, DivStub);

module.exports = DivStub;