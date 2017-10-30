function Pizza(name,orders){
	this.name = name;
	this.orders = orders;
	this.details=function(){
		return this.name + " " + this.orders;
	}	
	this.offers=function(order,amount){
			
			var list =[];
			
			this.orders.filter(function(ord){
				if(ord>=amount){
					list.push(ord);
				}
			});
			
			if (list.length== order){
				return "Eligible for free pizaa";
			}else{
				return "not Eligible for free pizaa";
			}
	}
}


var p1 = new Pizza("surash",[100,250,400,200,350,600]); 
var p2 = new Pizza("Ramesh",[100,250,400,200,350,600]); 
var p3 =new Pizza("Umesh",[100,25,400,200,350,600]);
var p3 =new Pizza("Rajesh",[100,25,400,200,350,600]);

console.log(p1.details());
console.log(p1.offers(5,200));


console.log(p2.details());
console.log(p2.offers(5,250));

var customers = [];
customers.push(p1,p2,p3);
var eligibleCustomers = customers.filter(function(customer){
	return customer.offers(5,200 ) == "Eligible for free pizaa";
});

console.log("----------Eligible Customers-------------")
eligibleCustomers.forEach(function(customer){
	console.log(customer.name);
})
