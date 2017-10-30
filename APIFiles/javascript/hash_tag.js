var sentence = "we all love india";
//"#WeAllLoveIndia"
var words= sentence.split(" ");
var output = "#";

/*
for(var i=0;i < words.length;i++){
	var word = words[i];
	word = word[0].toUpperCase() + word.substr(1,word.length);
	output +=word;  
	} 
console.log(output);
*/

/* In ruby
words.each do |word|
	word[0].toUpperCase() + word.substr(1,word.length);
end
*/	

words.forEach(function(word){
	word = word[0].toUpperCase() + word.substr(1,word.length);
	output += word;  
});
console.log(output);