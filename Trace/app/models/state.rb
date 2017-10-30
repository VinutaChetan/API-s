class State < ActiveRecord::Base
	validates_presence_of :name,:code
	validates_uniqueness_of :name,:code

	has_many :rtos
	has_many :district
end
