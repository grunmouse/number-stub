const EqNumberStub = require('./eq-number-stub.js');
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

class SubStub extends EqNumberStub{
	constructor(a, b){
		super(sub, a, b);
	}

	expand(){
		let [a, b] = this.operands;

		let val = a[ADD](b[NEG]());
		
		if(val.expand){
			val = val.expand();
		}
		
		return val;
	}
}

EqNumberStub.mapping.set(sub, SubStub);

module.exports = SubStub;