class HomeController < ApplicationController
  def index
  	if params[:technology] && params[:location]
  		technology=params[:technology]
  		location=params[:location]
  		url = "http://api.indeed.com/ads/apisearch?v=2&format=json&co=in&limit=25&publisher=7277146494571922"
  		response=HTTParty.get("#{url}&q=#{technology}&l=#{location}")
  		@result=JSON.parse(response.body)
  	end	
  end

  def googaldiscal
  	if params[:origin] && params[:destination]
  		origin=params[:origin]
  		destination=params[:destination]
  		url="http://maps.googleapis.com/maps/api/distancematrix/json?mode=driving&language=en-EN&origins=#{origin}&destinations=#{destination}"
  		response=HTTParty.get("#{url}")
  		@result=JSON.parse(response.body)
  	end	
  end	
end
