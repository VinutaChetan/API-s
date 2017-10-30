function Person(first_name,last_name){
	this.first_name=first_name;
	this.last_name =last_name;
	this.greet=function(){
		return "Hello" +" " +  this.first_name +" " +this.last_name;
	} 
	this.language = function(language){
		if (language=="hindi"){
			return "Namaste, "+this.first_name+ " " + this.last_name;
		}else if(language=="Kannada"){
			return "Nmastara, " + this.first_name+ " " + this.last_name;
		}else{
			return "Hello" +" " +  this.first_name +" " +this.last_name;
		}
	}
}

var p1 = new Person("bob","smith");
	console.log(p1.greet());
	console.log(p1.language("hindi"));