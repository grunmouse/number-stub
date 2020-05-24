const NumberStub = require('./number-stub.js');

/**
 * Представляет выражение, содержащее заглушки
 */
class EqNumberStub extends NumberStub {
	constructor(operator, ...operands){
		let Ctor = EqNumberStub.mapping.get(operator);
		if(Ctor && Ctor !== this.constructor){
			return new Ctor(...operands);
		}

		this.operator = operator;
		this.operands = operands;
	}
	
	/**
	 * @abstract 
	 * @method expand() - раскрывает скобки
	 * @return {? extends NumberStub}
	 */
	 
	/**
	 * @abstract
	 * @method calc(params) - вычисляет выражение, заменяя переменные на числа
	 * @param params : {Object<String.(Number|NumberStub)>}
	 * @return {Number|(? extends NumberStub)}
	 */
	 
	/**
	 * @abstract
	 * @method toString() - сериализует формулу в формат совместимый с JavaScript
	 * @return {String}
	 */

	/**
	 * @abstract
	 * @method toTeX() - сериализует формулу в формат совместимый с laTeX
	 * @return {String}
	 */
	
}

EqNumberStub.mapping = new Map();

module.exports = EqNumberStub;