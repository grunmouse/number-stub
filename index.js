const NumberStub    = require('./number-stub.js');
const EqNumberStub  = require('./eq-number-stub.js');
const VarNumberStub = require('./var-number-stub.js');

require('./ariphmetic.js');
const defAsNumber = require('./as-number.js');

module.exports = {
	NumberStub,
	EqNumberStub,
	VarNumberStub,
	defAsNumber
};