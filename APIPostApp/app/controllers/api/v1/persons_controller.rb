class Api::V1::PersonsController < ApplicationController
	skip_before_action :verify_authenticity_token

  def index
  	@persons= Person.all
  end

  def create
  	@person =Person.new(person_params)
  	@person.save
  end

  def update
  	@person=Person.find_by(id: params[:id])
	if !@person.nil?
		@person.update_attributes(person_params)
	end	
  end			

  def show
  	@person=Person.find_by(name: params[:id])
  end

  def destroy
    @person= Person.find_by(name: params[:id])
    unless @person.nil?
      @person.destroy
    end  
  end

  private
		def person_params
			params[:person].permit(:name,:gender)
		end
end
