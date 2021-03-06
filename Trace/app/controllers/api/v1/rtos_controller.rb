class Api::V1::RtosController < Api::V1::ApiController
	skip_before_action :verify_authenticity_token
	before_action :check_api_key

	def index
		@user=User.find_by(api_key: params[:api_key])
		@rtos=Rto.all
	end

	def create
		@rto =Rto.new(rto_params)
		@rto.save
	end	

	def update
		@rto =Rto.find_by(vehicle_number: params[:id].upcase)
		if !@rto.nil?
			@rto.update_attributes(rto_params)
		end	
	end	

	def destroy
		@rto = Rto.find_by(vehicle_number: params[:id].upcase)
		unless @rto.nil?
			@rto.destroy
		end
	end		

	def show
		@rto=Rto.find_by(vehicle_number: params[:id].upcase)
	end	

	private
		def rto_params
			params[:rto].permit(:code,:vehicle_number,:registration_office,:address,:phone_number,:state_id,:district_id)
		end
end	
