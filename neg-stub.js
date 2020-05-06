const EqNumberStub = require('./eq-number-stub.js');
const {
	operators:{
		add, sub, mul, div, pow,
		neg,
		eq, ne, lt, gt
	}
	symbols:{
		NEG, SUB
	}
} = require('@grunmouse/multioperator-ariphmetic');


class NegStub extends EqNumberStub{
	constructor(a){
		super(sub, a);
	}

	expand(){
		let [a] = this.operands;
		
		if(typeof a === 'number'){
			return -a;
		}
		
		if(a.operator === neg){
			a = a.operands[0];
		}
		else if(a.operator === add){
			let opers = a.operators.map((a)=>(a[NEG]()));
			
			a = new AddStub(...opers);
		}
		else if(a.operator === sub){
			let [x, y] = a.operands;
			a = y[SUB](x);
		}
		
		if(a.expand){
			a = a.expand();
		}
		
		return a;
	}
}

EqNumberStub.mapping.set(neg, NegStub);

module.exports = NegStub;