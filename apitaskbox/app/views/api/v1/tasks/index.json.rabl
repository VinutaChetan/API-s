if @tasks.empty?
	node(:message){"No Tasks Found"}
else
	collection @tasks
	attributes :id,:title,:is_completed
end	

