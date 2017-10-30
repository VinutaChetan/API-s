// var stocks={
// 	books : 100,
// 	laptops :250,
// 	mobiles :300
// };
// // //find the total stocks of inventories
// // var total = 0;
// // val  = stocks.books + stocks.laptops +stocks.mobiles;
// // total =total +val;
// // console.log(total);

// var sum = 0;
// for (var key in stocks){
// 	sum = sum + stocks[key];
// }
// console.log("Total Inventories : " + sum);


//find the total inventories for each categories
// var stocks = {
// 	books: {
// 		finction :75,
// 		nonfiction :50
// 	},
// 	laptops: {
// 		apple:10,
// 		dell : 150
// 	},
// 	mobiles: {
// 		apple: 100,
// 		samsung: 23
// 	}
// }


// //var chare ;
// for (var category in stocks){
// 	var sum = 0;
// 	//console.log(key);
// 	//console.log(stocks[key]);
// 	//chare = stocks[key];
// 	for (var subCategory in stocks[category]){
// 		sum = sum + stocks[category][subCategory];	
// 	}
// 	console.log("total " + category + "stock is " + sum);
// }


// var stocks = [
//   {
// 	books: {
// 		finction :75,
// 		nonfiction :50
// 	}
//   },
//   {	
// 	laptops: {
// 		apple:10,
// 		dell : 150
// 	}
//   },
//   {	
// 	mobiles: {
// 		apple: 100,
// 		samsung: 23
// 	}
//    }	
// ]

// console.log(stocks);
// stocks.forEach(function(stock){
// 	for (var category in stock){
// 		var sum = 0;
// 	//console.log(category);
// 		for (var subCategory in stock[category]){
// 			//console.log(subCategory);
// 			sum = sum + stock[category][subCategory];		
// 		}
// 	}	
// 	console.log("total " + category + "stock is " + sum); 
// });


var stocks = [
	{
	books: [75,100]
	},
	{
	laptops:[10,150]
	}
]

stocks.forEach(function(category){
	
	for(var subCategory in category){
		//console.log(category[subCategory]);
		//category.forEach(function(subcategory))
		var sum = 0;
		category[subCategory].forEach(function(stock){
			sum +=stock;
		});
		console.log("we have " + sum + "  of Sum of " + subCategory )
	}
	
});	

