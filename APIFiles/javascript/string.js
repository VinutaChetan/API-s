var name = "Chetan";
var lastName = "DA";
var tags = "ruby javascript rails ajax";

console.log("The length of name is" + name.length);
console.log(name.toUpperCase());
console.log(lastName.toLowerCase());
console.log(tags.split(" "));

var languages = tags.split(" ");
for(var i=0 ; i<languages.length ; i++){
	console.log(languages[i].toUpperCase());
}