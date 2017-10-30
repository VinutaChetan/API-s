#api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a8437fc2adc27c16cfa3bd63f5b72258

# require 'httparty'
# require 'json'
# require 'pp'

# url= "http://api.openweathermap.org/data/2.5/weather"

# puts "Enter your city"
# city= gets.chomp

# APPID ="a8437fc2adc27c16cfa3bd63f5b72258"

# response=HTTParty.get("#{url}?q=#{city}&APPID=#{APPID}")
# #puts response
# result=JSON.parse(response.body)
# #result["main"]["temp"]

# puts "current_weather :#{result["main"]["temp"]}"

# puts "The tempurature for next 5 days in #{result["city"]}"

require 'httparty'
require 'json'
require 'pp'

url= "http://api.openweathermap.org/data/2.5/forecast?mode=json&APPID=a8437fc2adc27c16cfa3bd63f5b72258"

puts "Enter your city"
city= gets.chomp

response = HTTParty.get("#{url}&q=#{city}")
result=JSON.parse(response.body)
# dt_txt = result["list"][0]["dt_txt"]
# temp = result["list"][0]["main"]
# puts dt_txt
puts "#{city} : "

weather_hash= {}

result["list"].each do |lists|
	date_time = lists["dt_txt"]

	temp = lists["main"]["temp"]	
	date = date_time.split()[0]
	time = date_time.split()[1]

	if weather_hash.has_key?(date)
		weather_hash[date].store(time,temp)
	else 
		weather_hash[date]={}
		weather_hash[date].store(time,temp)
	 end
end	

puts weather_hash
