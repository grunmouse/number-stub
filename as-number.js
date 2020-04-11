const MOP = require('@grunmouse/multioperator');
const NumberStub = require('./number-stub.js');

function isClass(Ctor, Parent){
	return Ctor === Parent || Ctor.prototype instanceof Parent;
}

/**
 * Повторяет для NumberStub объявления всех операторов, объявленных для Number,
 * за исключением тех, которые не имеют второго операнда или второй аргумент Number или NumberStub
 */
function traverse(){
	for(let [oper, First, Second, func] of MOP.itrFirst(Number)){
		if(!Second) continue; //Не повторяем операции над одним аргументом
		if(isClass(Second, Number) || isClass(Second, NumberStub)) continue; //Не повторяем операции, над числами или над числом и заглушкой
		
		if(oper.getOwnImplement(NumberStub, Second)) continue; //Не обрабатываем существующие реализации
		
		oper.def(NumberStub, Second, func);
	}

	for(let [oper, First, Second, func] of MOP.itrSecond(Number)){
		if(isClass(First, Number) || isClass(First, NumberStub)) continue; //Не повторяем операции, над числами или над числом и заглушкой
		
		if(oper.getOwnImplement(First, NumberStub)) continue; //Не обрабатываем существующие реализации
		
		oper.def(First, NumberStub, func);
	}
}

module.exports = traverse;