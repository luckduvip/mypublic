var Car = require("./Car");
var Preson = function(name,age){
	this.name = name;
	this.age = age;
	this.car = new Car("bmw","3300");
}
Person.protytype = {
	setInfo : function(name,age){
		this.name = name;
		this.age = age;
	}
	,getInfo : function(){
		return {name :this.name, age: this.age};
	}
}
