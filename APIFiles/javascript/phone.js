
 /*
	numbers = [1,2,3,4,5,6,7,8,9,0]
	result=(123) 456-7890
 */

numbers= [1,2,3,4,5,6,7,8,9,0];
num = "(" + numbers.slice(0,3).join("") + ") " +  numbers.slice(3,6).join("") + "-" + numbers.slice(6).join("") ;
console.log(num );
