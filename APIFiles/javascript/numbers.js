numbers =[5, 3, 2, 8, 1, 4];

even_array = [];
odd_array = [];
result_array = [];
var add;
var even;
numbers.forEach(function(num){
	if (num % 2 != 0 ){
		odd_array.push(num);
	}else{
		even_array.push(num);
	}
})

console.log("Given array:" + numbers);
odd = odd_array.sort(function(a,b){
	return (a-b);
})

even = even_array.sort(function(a,b){
	return (a-b);
})
console.log(odd_array);
console.log(even_array);

var i = 0;
//var j=0;
numbers.forEach (function(numb){
	
	if (numb %2 != 0){
		 result_array.push(odd[i]);
		 i++;
	}	 
	else{
		 
		 result_array.push(numb );
	}	
    

});
console.log(result_array);
 