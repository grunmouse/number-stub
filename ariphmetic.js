const {
	operators:{
		add, sub, mul, div, pow,
		neg,
		eq, ne, lt, gt
	}
} = require('@grunmouse/multioperator-ariphmetic');

const NumberStub = require('./number-stub.js');
const EqNumberStub = require('./eq-number-stub.js');


[
	add, 
	sub, 
	mul, 
	div,
	pow,
	eq,
	ne,
	lt,
	gt
].map((operator)=>{
	operator.def(NumberStub, NumberStub, (a, b)=>(new EqNumberStub(operator, a, b)))
	operator.def(Number, NumberStub, (a, b)=>(new EqNumberStub(operator, a.valueOf(), b)))
	operator.def(NumberStub, Number, (a, b)=>(new EqNumberStub(operator, a, b)))
});

[
	neg
].map((operator)=>{
	operator.def(NumberStub, (a)=>(new EqNumberStub(operator, a)));
});
