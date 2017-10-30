Array.prototype.unique = function(){
	var result = [];
	this.forEach(function(value){
		if(result.indexOf(value) == -1){
			result.push(value);
		}
	});
	return result;
};

Array.prototype.count = function(arg){
	return this.filter(function(value){
		return value ==arg;
	}).length;
};

var names = ["virat","virat","sachin","virat","sachin","rahul"];

var players = names.unique();
console.log(players);

var output = {};
players.forEach(function(player){
	output[player] = names.count(player);
});
console.log(output );