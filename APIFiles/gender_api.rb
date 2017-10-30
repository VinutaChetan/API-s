#connection with APIPostApp
require 'httparty'
require 'json'
require 'pp'


url="https://gender-api.com/get?key=HPcUnqWLEmByaToEaf"

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

http = Net::HTTP.new(uri.host, uri.port)
#http.use_ssl = true

req = Net::HTTP::Post.new(uri.path, initheader = {'Content-Type' =>'application/json'})
#req['name'] = 'vinuta'
req.body =  person.to_json
res = http.request(req)
puts "Response #{res.code} #{res.message}: #{res.body}"




