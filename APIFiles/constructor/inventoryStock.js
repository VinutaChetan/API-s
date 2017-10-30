// You will be given an array which lists the current inventory of stock in your store. Example:

// var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

// Your will also be given an array which list the new inventory being delivered to your store today. Example:

// var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];

// Your task is to write a function that when invoked
// updateInventory(currentInventory, newInventory);

// returns the updated list of your current inventory :
// [{name: "HTC", stock: 25}, {name: "Nokia", stock: 1000}, {name: "Samsung", stock: 55}, {name: "Sony", stock: 20}, {name: "Apple", stock: 30}, {name: "LG", stock: 5}]

// Following things to keep in mind.

//     for mobiles you will need to use a constructor function
//     method to display the stock
//     method to add to stock




function Mobile(name,stock){
	this.name = name;
	this.stock = stock;

	this.display = function(){
		return this.name + " " + this.stock;
	}
	this.addstock = function(unit){
		return this.stock+=unit;
	}
}

// var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15},{name: "Time", stock: 15}];

var currentInventory=[];
var m1 = new Mobile("HTC",25);
var m2 = new Mobile("Nokiya",100);
var m3 = new Mobile("Samsung",50);
var m4 = new Mobile("Sony",10);
var m5 = new Mobile("Apple",15);

//function definition
function updateInventory(currentInventory,newInventory){
	newInventory.forEach(function(item){
		var product =currentInventory.find(function(mobile){
			return mobile.name == item.name;
		});
		if(product == undefined){ //not in inventory
			currentInventory.push(new Mobile(item.name,item.stock));
		}else{ //updating the stock
			product.addstock(item,stock);
		}
	});
}

//function invocation
updateInventory(currentInventory,newInventory);
console.log(currentInventory);
// console.log("----------------latest added object---------");
// var newInventory = [{name:"LG", stock:15}];
// updateInventory(currentInventory,newInventory);
// console.log(currentInventory);