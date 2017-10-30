var numbers = [10,9,10,20,40,50,25];
var names = ["veeresh","mahesh","suresh","ramesh"];
var players;

console.log(numbers[0]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(players);

console.log(numbers.reverse());
console.log(names.join(" , "));
console.log(names.sort());
console.log(numbers.sort(function(a,b){//array of numerical values
	return b-a; //descending order
}));
 //return a-b; //ascending order

 numbers.push(45);//adds to the end of the array
 console.log(numbers);
 numbers.unshift(1); // adds to the begging of the array
 console.log(numbers);
 numbers.pop(); //removes the last value from the array
 console.log(numbers);
 numbers.shift(); //removes the first value from the array

 //mutable method

 console.log(numbers);
 console.log(numbers.slice(0,3));
 console.log(numbers);

 //immutable method
 console.log(names);
 console.log(names.slice(0,3));
 console.log(names);
 console.log(names.slice(1,4));

 //console.log(names.includes("Jagadesh"));//includes not not compatible for my mac
 //console.log(names.includes("ramesh"));	// so its not work for me

//find & filter
//numnbers.find{|n| n == searchNumber}


//find = if the number is found its returns the number , if number is not found it returns undefined
var numbers = [10,20,30,40,10,40,50];
searchNumber = 40;

result = numbers.find(function(n){
	return n == searchNumber;
});

if (result == undefined){
		console.log(searchNumber + " not found");
} else{
		console.log(searchNumber + " is found");
}

//filter = if the number is found its returns array of the numbers , if number is not found it returns empty array

var numbers = [10,20,30,40,10,40,50];
searchNumber = 40;

result = numbers.filter(function(n){
	return n == searchNumber;
});

if (result.length == 0){
		console.log(searchNumber + " not found");
} else{
		console.log(searchNumber + " is found " +result.length + " times.");
}