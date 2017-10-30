require 'httparty'
require 'json'
require 'pp'

url= "http://localhost:3000/api/v1/states/"

# puts "Enter the state"
# state=gets.chomp
# #puts state

# puts "Enter the code"
# code=gets.chomp
#puts code


# response=HTTParty.get("#{url}#{code}")
# results=JSON.parse(response.body)

	
#results=JSON.parse(response.body)
#for states
# results.each do |result|
	#puts "#{results["code"]}"" - #{results["name"]}"
#end

#for state with code
#puts "#{results["code"]}"" - #{results["name"]}"

#for creation
# response=HTTParty.post("#{url}",body:{
# 										"state" => {
# 											"name" => "#{state}", 
# 											"code"=>"#{code}"},
# 								:headers =>{ "Content-type" => "application/json" }
# 								}) 		


#for deletion
# url= "http://localhost:3000/api/v1/states/"
# puts "Enter the code to be delete"
# state_code=gets.chomp
# #puts state_code

# response=HTTParty.get("#{url}")
# results=JSON.parse(response.body)
# puts results.class
# results.each do |result|
# 	if state_code == result["code"]
# 	HTTParty.delete("#{url}#{result["code"]}")
# 	puts "Record deleted"
# 	end
# end	

#for updation
url= "http://localhost:3000/api/v1/states/"

response=HTTParty.get("#{url}")
results=JSON.parse(response.body)

puts "Enter the code be update"
state_code=gets.chomp

# url= "http://localhost:3000/api/v1/states/"
results.each do |result|
	if state_code == result["code"]
	puts "Enter the state"
	state=gets.chomp


	puts "Enter the code"
	code=gets.chomp

	HTTParty.put("#{url}#{result["code"]}",
								body:{
										"state" => {
											"name" => "#{state}", 
											"code"=>"#{code}"},
								:headers =>{ "Content-type" => "application/json" }
								}) 		
	end
end


