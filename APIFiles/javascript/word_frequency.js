var names = ["virat","virat","sachin","virat","sachin","rahul"];

var players = [];
var output =[];
//index = names.indexOf("virat");
index = names.lastIndexOf("virat");
console.log(index);
// console.log(names);

//count the values
function findCount(player){
	var count = names.filter(function(name){
		return name == player;
	});
	return count.length;
}

//unique values in the array
names.forEach(function(name){
	if (players.indexOf(name) == -1){
		players.push(name);
	}
});
console.log(players);

players.forEach(function(player){
	output[player] = findCount(player);

});

console.log(output);
for(var key in output){
	console.log(key + " : " + "*".repeat(output[key]));
}
