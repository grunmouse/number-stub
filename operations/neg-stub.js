const EqNumberStub = require('../eq-number-stub.js');
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
		super(neg, a);
	}

	/**
	 * Отрицание
	 */
	expand(){
		let [a] = this.operands;
		
		if(typeof a === 'number'){
			return -a;
		}
		
		if(a.operator === neg){
			//Двойное применение
			a = a.operands[0];
		}
		else if(a.operator === add){
			//Отрицание суммы заменяем на сумму отрицаний
			let opers = a.operators.map((a)=>(a[NEG]()));
			
			a = new AddStub(...opers);
		}
		else if(a.operator === sub){
			//В разности меняем местами операнды
			let [x, y] = a.operands;
			a = y[SUB](x);
		}
		else{
			//Если ни что из этого - клонируем и возвращаем исходный объект
			return new NegStub(a);
		}
		
		//Если мы дошли до сюда - значит объект был преобразован
		if(a.expand){
			a = a.expand();
		}
		
		return a;
	}
}

EqNumberStub.mapping.set(neg, NegStub);

module.exports = NegStub;