class Rto < ActiveRecord::Base
	validates_presence_of :code,:vehicle_numberstate_id,:district_id

	belongs_to :state
	belongs_to :district
end
