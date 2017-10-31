require 'httparty'
require 'json'
require 'pp'

require 'net/http'


url="https://gender-api.com/get?key=HPcUnqWLEmByaToEaf"

puts "Enter your choice 1.create 2.update 3.delete"
choice= gets.chomp
if(choice == "1")
	puts "Enter name"
	name = gets.chomp
	response = HTTParty.get("#{url}&name=#{name}")
	result= JSON.parse(response.body)
	#puts "#{result["gender"]}"
	puts "Name:#{name} Gender:#{result["gender"]}"
	#puts result
	h = {}

	h.store("name","#{result["name"]}")
	h.store("gender","#{result["gender"]}")
	puts h

	uri = URI.parse("http://localhost:3000/api/v1/persons")
	#BOUNDARY = "AaB03x"
	#header = {"Content-Type": "multipart/form-data, boundary=#{BOUNDARY}"}
	person = {person: {
	                   name: "#{result["name"]}" ,
	                   gender: "#{result["gender"]}"
	                      }
	            }

	# Create the HTTP objects
	http = Net::HTTP.new(uri.host, uri.port)
	req = Net::HTTP::Post.new(uri.path, initheader = {'Content-Type' =>'application/json'})
	req.body =  person.to_json

	# Send the request
	res = http.request(req)
	puts "Response #{res.code} #{res.message}: #{res.body}"
end

if(choice=="2")
	puts "Enter name"
	name = gets.chomp


	uri = URI('http://localhost:3000/api/v1/persons/' + name )
	res = Net::HTTP.get(uri) # => String
	puts res
	puts "Do you want to update if Yes enter your name else exit"
	name_update = gets.chomp
	if name_update != "exit"
		#pname=name 
		puts "Enter name"
		name1 = gets.chomp
		response = HTTParty.get("#{url}&name=#{name1}")
		result1= JSON.parse(response.body)
		#puts "#{result["gender"]}"
		puts "Name:#{name1} Gender:#{result1["gender"]}"
		res = res.to_json
		
		uri = URI.parse('http://localhost:3000/api/v1/persons/24' )
		
		# puts uri
		# puts res

		person = 	{
	                   name: "#{result1["name"]}" ,
	                   gender: "#{result1["gender"]}"
	             	}
	            
	    # Create the HTTP objects
	    http = Net::HTTP.new(uri.host, uri.port)

		req1 = Net::HTTP::Put.new(uri.path, initheader = {'Content-Type' =>'application/json'})
		#req['name'] = 'vinuta'
		req1.body =  person.to_json
		res = http.request(req1)
		puts "Response #{res.code} #{res.message}: #{res.body}"       
	end	
end

if(choice=="3")
	puts "Enter name"
	name = gets.chomp
	uri = URI('http://localhost:3000/api/v1/persons/' + name )
	 puts uri	
	puts "Do you want to delete Y/N"
	choice =gets.chomp
	if (choice=="y")
		http = Net::HTTP.new(uri.host, uri.port)
		req = Net::HTTP::Delete.new(uri.path)
		res = http.request(req)
		puts name +" " +  "deleted successfully"
	end	
		
end	
