if @state.valid?
	object @state
	attributes :id,:name,:code
	node(:staus){"200"}
	node(:messge){"OK"}
else
	node("error"){"record not found"}
	node("reason"){@state.errors.full_messages}
end		