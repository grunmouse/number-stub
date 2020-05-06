const EqNumberStub = require('./eq-number-stub.js');

const {
	operators:{
		add, sub, mul, div, pow,
		neg,
		eq, ne, lt, gt
	}
} = require('@grunmouse/multioperator-ariphmetic');

class AddStub extends EqNumberStub{
	
	constructor(...operands){
		super(add, ...operands);
	}
	
	expand(){
		let operands = [];
		for(let eq of this.operands){
			if(eq.expand){
				eq = eq.expand();
			}
			if(eq.operator === add){
				operands.push(...eq.operands);
			}
		}
		return new AddStub(...operands);
	}
}

EqNumberStub.mapping.set(add, AddStub);

module.exports = AddStub;