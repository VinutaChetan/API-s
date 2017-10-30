object @personif @rto.valid?
	object @rto
	attributes :id,:code,:vehicle_number,:registration_office,:address,:phone_number,:state_id,:district_id
	node(:staus){"200"}
	node(:messge){"OK"}
else
	node("error"){"record not found"}
	node("reason"){@rto.errors.full_messages}
end		