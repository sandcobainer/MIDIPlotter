function transpose_down()
{
	var my_list = arrayfromargs(arguments);
	var my_transdown_list = new Array(my_list.length);
	var i;
	for (i=0; i < my_list.length; i++) {
		my_transdown_list[i] = my_list[i] - 1;
	};		
	myval = my_transdown_list;
	bang();
	post(my_transdown_list);
}

function transpose_up()
{
	var my_list = arrayfromargs(arguments);
	var my_transup_list = new Array(my_list.length);
	var i;
	for (i=0; i < my_list.length; i++) {
		my_transup_list[i] = my_list[i] + 1;
	};		
	myval = my_transup_list;
	bang();
	post(my_transup_list);
}
	
function stretch()
{
	//List for this function should include all the note durations or x values and the stretch factor added on at the end
	var my_list = arrayfromargs(arguments);
	var stretch_factor = my_list.pop();
	var my_stretch_list = new Array(my_list.length);
	var i;
	for (i=0; i < my_list.length; i++) {
		my_stretch_list[i] = my_list[i] * stretch_factor;
	};
	myval = my_stretch_list;
	bang();
	post(my_stretch_list);
}

function exponentiate() 
{
	var my_list = arrayfromargs(arguments);
	var power = my_list.pop();
	var list_min = min(my_list)
	var my_quad_list = new Array(my_list.length);
	var reduced_list = new Array(my_list.length);
	var i;
	for (i = 0; i < my_list.length; i++) {
		reduced_list[i] = my_list[i] - list_min + 1;
    	my_quad_list[i] = Math.round(Math.pow(reduced_list[i], power) + list_min - 1);
  	}

	myval = my_quad_list;
	bang();
}

function min(my_list)
{
	var list_min = my_list[0];
	var i;
	for (i = 0; i < my_list.length - 1; i++) {
		if (list_min > my_list[i+1]) {
			list_min = my_list[i+1];
		}; 
	};
	return list_min;
}