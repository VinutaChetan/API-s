if @person.nil?
	node(:error){"#{params[:id]} not found"}
else
	node("message"){"#{@person.name} was deleted"}
	node(:status){"200"}	
end	