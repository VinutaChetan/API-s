if @rto.nil?
	node("error"){"#{params(:id)} not found"}
elsif @rto.valid?
	node(:message){"#{@rto.vehicle_number} was successfully updated"}	
	node(:status){"200"}
else
	node(:error){"Record not found"}
	node(:reason){@state.errors.full_messages}
end		

