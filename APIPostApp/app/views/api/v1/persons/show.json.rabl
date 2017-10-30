if @person.nil?
	node("error"){"record not found"}
	node("status"){"404"}
else
	object @person
	attributes :id,:name,:gender
end

