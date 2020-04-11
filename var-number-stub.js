const NumberStub = require('./number-stub.js');

class VarNumberStub extends NumberStub {
	constructor(name){
		this.name = name;
	}
}

module.exports = VarNumberStub;