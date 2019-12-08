function linear_transform()
/*
This function takes in a list of the x-y coordinates of MIDI file and the values a, b, c, and d and outputs transformed x-y coordinates. 
Effectively, this function allows us to transform the inputs-output pairs of any function without needing to know the actual function. 
To work properly, the input list to the function must have at least one coordinate pair (x,y) followed by the values of a, b, c, and d. */
{
	var my_list = arrayfromargs(arguments);
	var d = my_list.pop();
	var c = my_list.pop();
	var b = my_list.pop();
	var a = my_list.pop();
	var my_transformed_list = new Array(my_list.length);
	var i;
	
	for (i=0; i < (my_list.length)/2; i++) {
		
		my_transformed_list[i] = (my_list[i]/b)-c	
	};
	
	for (i=my_list.length/2; i<my_list.length; i++) {
		
		my_transformed_list[i] = a*my_list[i]+d;
	};	
	
	myval = my_transformed_list;
	post(my_transformed_list);
	bang();
 	post("\n");
}