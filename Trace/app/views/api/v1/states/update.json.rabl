if @state.nil?
	node(:error){"#{params[:id]} not found"}
elsif @state.valid?
	node(:message){"#{@state.name} was successfully updated"}	
	node(:status){"200"}
else
	node(:error){"Record not found"}
	node(:reason){@state.errors.full_messages}
end		