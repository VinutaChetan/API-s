function Person(){
	this.name;
	this.city;
	this.details = function(){
		return this.name + " " + this.city;
	}
}

var p1 = new Person();
p1.name = "Virat";
p1.city = "Delhi";
console.log(p1.details());


var p2 = new Person();
p2.name = "Rahul";
p2.city = "NewYark";
console.log(p2.details);
console.log(p2.details());