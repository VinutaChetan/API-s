if @rto.nil?
	node(:error){"#{params[:id]} not found"}
else
	node("message"){"#{@rto.vehicle_number} was deleted"}
	node(:status){"200"}	
end	