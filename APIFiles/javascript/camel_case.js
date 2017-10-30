String.prototype.camelCase = function(){
	var words = this.split(" ");
	var camelCase = "";
	words.forEach(function(word){
		camelCase += word[0].toUpperCase() + word.slice(1);
	});
	return camelCase;
};

var greeting = "hello camel case";
console.log(greeting.camelCase()); //"HelloCamelCase"

//class String
//def camel_case
//   self.split(" ").map!{|word| word.capitalize}.join("")
//end
//end

//puts"hello camel case".camel_case
