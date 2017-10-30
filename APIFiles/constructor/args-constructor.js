function Person(name,city){
	this.name = name;
	this.city =city;
	this.details = function(){
		return this.name + " " +this.city;
	}
}

	var p1 = new Person("virat","Delhi");
	console.log(p1.details());

//it returns undefined
 var p2 = new Person();
	console.log(p2.details());

//it takes only 2 values
var p3 = new Person("virat","Delhi","RCB");
	console.log(p3.details());	