var colors = [["white","softness"],["red","danger"]];

var output=[];
colors.forEach(function(color){
	var obj ={};
	obj[color[0]] =color[1];
	output.push(obj)
//console.log(obj);
	
});

console.log(output);

