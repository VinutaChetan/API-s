var numbers = [10,21,10,3,1,45,56];

/* find a;l +ve, _ve ,odd,even */

pos = numbers.filter(function(n){
	return n > 0;
});
console.log(pos);

neg = numbers.filter(function(n){
	return n < 0;
});
console.log(neg);

even = numbers.filter(function(n){
	return (n % 2) == 0;
});
console.log(even);

odd = numbers.filter(function(n){
	return (n % 2) != 0;
});
console.log(odd);

function includes(searchNumber){
	result = numbers.find(function(n){
		return searchNumber == n;
	});
	return result == undefined ? false : true ;
}

console.log(includes(10));


//prototypal inheritance

//Array.prototype.count = function(searchNumber){
//var i=0;
// var n=numbers.length;
// var count= 0;
// for (i=0 ; i<n ;i++){

// if (searchNumber == this[i]){
// console.log("Search found");
// count++;
// 	}
// 	i++;
//}
	
// 	return count;
// };


//Creating own methods
Array.prototype.count = function(searchNumber){
	var result = this.filter(function(n){
		return n == searchNumber;
	})
	
	return result.length;
}

console.log(numbers.count(1));

//prototype for include
Array.prototype.include =function(searchNumber){
	var result = this.find(function(n){
		return n == searchNumber;
	})
	return result == undefined ? false : true ;
}

console.log (numbers.include(10));

name = "hari";
String.prototype.toCapitalize = function(){
	return this[0].toUpperCase() + this.slice(1);
}
console.log(name.toCapitalize());






