function linear_transform()
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