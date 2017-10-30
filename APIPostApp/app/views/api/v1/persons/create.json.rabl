if @person.valid?
	object @person
	attributes :name,:gender
	node(:status){"200"}
	node(:message){"ok"}
else
	node("error"){"record not found"}
	node("reason"){@person.errors.full_messages}
end	

