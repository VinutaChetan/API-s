function Customer(name,account_number,balance ){
	this.name = name;
	this.account_number = account_number;
	this.balance = balance;
	this.details=function(){
		return this.name  +" " +  this.account_number +" " + this.balance;
	}
	 this.current=function(amount,request){
	 	if (request == 1){
	 		this.balance += amount;
	 		return "After deposit balance is" + this.balance;
	 	}else (request == "0") 
	 		if(this.balance - amount < 0){
	 			return "insufficient_balance";
	 		}else{
	 		this.balance= this.balance - amount;
	 				return "After withdrawal balance is " + this.balance;
	 	}
	 	

	 }

}


	

function transaction(cust_numbers,accNo,amt,request){
	customer = cust_numbers.find(function(customer){
		return customer.account_number == accNo ;
	})
	if(customer == undefined){
		return "customer is not found";
	}else{
		return customer.current(amt,request);
	}
}	

var cust_numbers = [];

var c1 = new Customer("Vijay","98706574324",5000);

var c2 = new Customer("Raju","98706574325",1000);
var c3 = new Customer("Manjula","98706574326",500);
cust_numbers.push(c1,c2,c3);
//console.log(cust_numbers);

cust_numbers.forEach(function(cust){
		console.log(cust.details());
	});

// console.log(c1.details());
// console.log(c2.details());
// console.log(c3.details());

// console.log(c1.details());
// console.log (c1.current(1000,1));

// console.log(c1.current(500,0));
// console.log(c1.current(7500,0));

//cust_numbers.
//console.log(cust_numbers.details());
console.log(transaction(cust_numbers,"98706574324",2000,1));
//console.log(c1_details);





  