// var person = {
// 	firstName  : "John",
// 	lastName : "Doe"
// }

// //display the key's value using the .oprator
// console.log(person.firstName);
// console.log(person.lastName);

// //diaplsy the key's value using  []
// console.log(person["firstName"]);
// console.log(person["lastName"]);

// //iterate over the properties to display the values
// for(key in person){
// 	//console.log(key);
// 	console.log(person[key]);
// 	//console.log(person.log); it won't work displays undefined
// 	//when we iterating we cannot use the .operator on the object to return the value of the property 
// 	//to know the key of the value "John"
// 	if(person[key] == "John"){
// 		console.log(key);
// 	}	
// }

//array of objects
var people= [
	{
		firstName:"John",
		lastName:"Doe"
	},
	{
		firstName:"Dwanye",
		lastName:"Smith"
	}
]

//value at the 0th index is an object
console.log(people[0]);

//calling th efirst name property
console.log(people[0].firstName);

//itrating over an array and calling the properties
people.forEach(function(person){
	console.log(person.firstName + " " + person.lastName);
});

//itrating over an array and iteratig over an object
people.forEach(function(person){
	for(var key in person){
		console.log(person[key]);
	}
});

people.forEach(function(person){
	var full_name = "";
	for(var key in person){
		full_name +=person[key] + " " ;
	}
	console.log(full_name);
});





