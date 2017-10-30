require 'httparty'
require 'json'
require 'pp'

url="https://www.codewars.com/api/v1/code-challenges/"

puts "Enter slug"
slug= gets.chomp

response=HTTParty.get("#{url}#{slug}") #resopnse is comes in json format
#puts response this is in json format
 result=JSON.parse(response.body) #convert json faormat to hash format

#puts result
if response["success"]==false
	puts "This kata is #{response["reason"]}"
else
	puts "Name : #{result["name"]}"
	languages =result["languages"].map! {|language| language.capitalize!}.join(",")
	puts "Languages :#{languages}"
	puts "url :#{result["url"]}"
	puts "CreatedBy : #{result["createdBy"]["username"]}"
	puts "Description: #{result["description"]}"
	puts "Total Attems: #{result["totalAttempts"]}"
	puts "#{result["tags"].join(",")}"
end	


