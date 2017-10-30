if @rto.nil?
	node("error") {"record not found"}
	node("status") {"404"}
else
	object @rto
	attributes :code,:vehicle_number,:registration_office,:address,:phone_number,:state_id,:district_id
	node("status"){"200"}
	node("message"){"OK"}

	child :state do
	attributes :name, :code
end

child :district do
	attributes  :name
end
end	
