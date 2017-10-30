var today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getDate());
//months starts 0
//0-jan,1-feb...11-dec
console.log(today.getMonth());
//days starts 0
//0-sun,1-mon....6-sat
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());

var newYear = new Date(2017,0,1);
console.log(newYear);
var days = {
	0: "Sunday",
	1: "Monday",
	2: "Tuesday",
	3: "Wednesday",
	4: "Thursday",
	5: "Friday",
	6: "Saturday"
}

var months = {
	0: "January",
	1: "February",
	2: "March",
	3: "April",
	4: "May",
	5: "June",
	6: "July",
	7: "August",
	8: "September",
	9: "October",
	10: "November",
	11: "December"
}

console.log("today is" + today.getDate() + " " + months[today.getMonth()]+ " " + today.getFullYear()+ "and its day"  +days[today.getDay()])

