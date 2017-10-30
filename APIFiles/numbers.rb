# You have an array of numbers.
# Your task is to sort ascending odd numbers but even numbers must be on their places.

# Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

# Example

# sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

# array=[5,3,2,8,1,4]

# arr1=[]
# arr2=[]
# final=[]
# array.each do |arr|
# 	if arr.odd?
# 		arr1=arr1.push(arr)
# 	else 
# 		arr2=arr2.push(arr)		
# 	end	
# end	
# #puts "#{arr1}"
# odd_num=arr1.sort
# even_num=arr2.sort
#  puts odd_num
# puts even_num.sort
# puts odd_num.length
#  for i in (0..array.length)
#  	if array[i].odd?
#  	puts "zero is #{array[i]}"
# 		for j in (0..odd_num.length)
#  			puts " odd is #{odd_num[j]}"
# 				# if (array[i]) > (odd_num[j])
#  			# 	  final = final.push(odd_num[j])
# 				# end	
						
#  		end
#  	end	
#  end
#  puts final

 numbers =[5, 3, 2, 8, 1, 4]

even_array = []
odd_array = []
result_array = []

numbers.each do |number|

	if number.odd?
       odd_array.push(number)
       
	else
	   even_array.push(number)
	   
	end

end
puts "Given array: #{numbers}"
odd_sort = odd_array.sort!
puts "Odd array: #{odd_sort}"

puts "Even array: #{even_array}"

i = 0
j=0
numbers.each do |number|
	
	if number.odd?
		 val = odd_sort[i]
		 result_array.push(val)
		 i+=1
	else
		 val = even_array[j]
		 result_array.push(val)
		 j+=1
    end

end
puts "#{result_array}"
 


