collection @rtos
attributes :id,:code,:vehicle_number,:registration_office,:address,:phone_number,:state_id,:district_id
child :state do
	attributes :name, :code
end

child :district do
	attributes  :name
end
