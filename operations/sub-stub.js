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

class SubStub extends EqNumberStub{
	constructor(a, b){
		super(sub, a, b);
	}

	/**
	 * Вычитание следует привести к сложению, а затем раскрыть в сложении скобки
	 */
	expand(){
		let [a, b] = this.operands;

		/*
			Используем тот факт, что над потомками NumberStub можно проводить арифметические операции 
			с получением потомков EqNumberStub
			
		*/
		let val = a[ADD](b[NEG]()); 
		
		if(val.expand){
			val = val.expand();
		}
		
		return val;
	}
}

EqNumberStub.mapping.set(sub, SubStub);

module.exports = SubStub;