if @person.nil?
	node(:error){"#{params[:id]} not found"}
elsif @person.valid?
	node(:message){" successfully updated"}	
	node(:status){"200"}
else
	node(:error){"Record not found"}
	node(:reason){@state.errors.full_messages}
end			

