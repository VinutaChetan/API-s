var response = {
   "destination_addresses" : [ "Mysore , Karnatake , India" ],
   "origin_addresses" : [ "Bangalore , Karnataka , India" ],
   "rows" : [
      {
         "elements" : [
            {
               "distance" : {
                  "text" : "150 mi",
                  "value" : 149993
               },
               "duration" : {
                  "text" : "3 hours 5 mins",
                  "value" : 11104
               },
               "status" : "OK"
            }
         ]
      }
   ],
   "status" : "OK"
};

//console.log(response["destination_addresses"]);
// for(var key in response){
//    console.log(response[key]);
// }

var destination = response.destination_addresses[0].split(", ")[0];
var origin = response["origin_addresses"][0].split(", ")[0];
var distance = response.rows[0].elements[0].distance.text;
var duration = response.rows[0].elements[0].duration.text;

console.log("The distance between " + origin + "and " + destination + "is "+ distance + " it takes " + duration + " to travel ");

