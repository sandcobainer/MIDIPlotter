var myval=0;

if (jsarguments.length>1)
	myval = jsarguments[1];

function bang()
{
	outlet(0, myval);
}


function invert() 
{
	var my_list = arrayfromargs(arguments);
	var my_inv_list = new Array(my_list.length);
	var i;
	for (i = 0; i < my_list.length; i++) {
		var distFromFirst = my_list[i] - my_list[0];
		my_inv_list[i] = my_list[i] - 2*distFromFirst;	
	};
	myval = my_inv_list
	bang();
	post(my_inv_list + "\n");
}


function retrograde() 
{
	var my_list = arrayfromargs(arguments);
	var my_ret_list = new Array(my_list.length);
	var i;
	for (i = 0; i < my_list.length; i++) {
		my_ret_list[(my_list.length-1)-i] = my_list[i]
	};

	myval = my_ret_list
	bang();
}


function exponentiate(my_list,list_min, power) 
{
	var my_list = arrayfromargs(arguments);
	var power = my_list.pop();
	var list_min = my_list.pop();
	var my_quad_list = new Array(my_list.length);
	var reduced_list = new Array(my_list.length);
	var i;
	for (i = 0; i < my_list.length; i++) {
		reduced_list[i] = my_list[i] - list_min;
    	my_quad_list[i] = Math.pow(reduced_list[i], power) + list_min;
  	}

	myval = my_quad_list;
	bang();
}

function min(list)
{
	var i;
	var placehold;
	for (i=0; i < list.length-1; i++) {
		if (list[i] < list[i+1]) {
			list[i+1] = list[i];
		} else {};
			
		};
	}

function hi()
{
	var var1 = arrayfromargs(arguments);
	var var2 = var1.pop();
	var var3 = var1.pop();
	post(var3);
}