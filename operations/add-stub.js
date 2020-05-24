const EqNumberStub = require('../eq-number-stub.js');

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
	
	/**
	 *
	 * Сложение имеет наименьший приоритет среди арифметических операций.
	 * Раскрытие скобок сводится к раскрытию скробок внутри операндов, и, если там образуется сложение,
	 *   объединения операндов
	 * Предполагается, что вычитание будет приведено к сложению.
	 */
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