
var dur = [];
inlets = 1;
outlets = 6;


if (jsarguments.length>1)
	myval = jsarguments[1];

function duration(v)
{
	dur = arrayfromargs(arguments);
}

glob = new Global('globalarray')
glob.my_list = []

function input() {
	outlet(0,'clear');		
	glob.my_list = arrayfromargs(arguments);
	var duration = 0;
	var i;
	for (i = 0; i < glob.my_list.length; i++) {
		outlet(0, [duration, glob.my_list[i]]);
		duration = duration + dur[i];
	};
	post('original : ', glob.my_list);
	outlet(1, glob.my_list);
	outlet(2, duration);
	outlet(4, glob.my_list);
	outlet(5, dur);

}

function invert() 
{
	var duration = 0;
	var my_list = glob.my_list;
	post('-----------------------');
	post('original : ', my_list);
	var my_inv_list = new Array(my_list.length);
	var i;
	outlet(0, 'clear');
	for (i = 0; i < my_list.length; i++) {
		var distFromFirst = my_list[i] - my_list[0];
		my_inv_list[i] = my_list[i] - 2*distFromFirst;
		outlet(0, [duration, my_inv_list[i]]);
		duration = duration + dur[i];	
	};
	post('inverted: ', my_inv_list);
	outlet(4, my_inv_list);
	outlet(5, dur);
}

function retrograde() 
{
	var duration = 0;
	var durList =[];
	var my_list = glob.my_list;
	post('-----------------------');
	post('original : ', my_list);
	var my_ret_list = new Array(my_list.length);
	var i;
	
	outlet(0, 'clear');
	for (i = 0; i < my_list.length; i++) {
		my_ret_list[i] = my_list[(my_list.length-1)-i];
		outlet(0, [duration, my_ret_list[i]]);
		durList.push(dur[(my_list.length-1)-i]);
		duration = duration + dur[i];
	};
	post('retrograded: ',my_ret_list);
	outlet(4, my_ret_list);
	outlet(5, durList);
}

function retroversion() {
	var duration = 0;
	var durList=[];
	var my_list = glob.my_list;
	post('-----------------------');
	post('original : ', my_list);
	outlet(0, 'clear');
	var my_ret_list = new Array(my_list.length);
	var i;
	for (i = 0; i < my_list.length; i++) {
		my_ret_list[i] = my_list[(my_list.length-1)-i];
	};
	
	var my_retvert = new Array(my_ret_list.length);
	var i;
	for (i = 0; i < my_ret_list.length; i++) {
		var distFromFirst = my_ret_list[i] - my_ret_list[0];
		my_retvert[i] = my_ret_list[i] - 2*distFromFirst;
		outlet(0, [duration, my_retvert[i]]);
		durList.push(dur[(my_list.length-1)-i]);
		duration = duration + dur[i];	
	};
	post('retroversed: ',my_retvert);	
	outlet(4, my_retvert);
	outlet(5, durList);

}

function transpose_down()
{	
	var duration = 0;
	var my_list = glob.my_list;
	post('-----------------------');
	post('original : ', my_list);
	outlet(0, 'clear');
	var my_transdown_list = new Array(my_list.length);
	var i;
	for (i=0; i < my_list.length; i++) {
		my_transdown_list[i] = my_list[i] - 1;
		outlet(0, [duration, my_transdown_list[i]]);
		duration = duration + dur[i];
	}		
	post('transposed down: ', my_transdown_list);
	outlet(4, my_transdown_list);
	outlet(5, dur);

}
​
function transpose_up()
{
	var duration = 0;
	var my_list = glob.my_list;
	post('-----------------------');
	post('original : ', my_list);
	outlet(0, 'clear');
	var my_transup_list = new Array(my_list.length);
	var i;
	for (i=0; i < my_list.length; i++) {
		my_transup_list[i] = my_list[i] + 1;
		
		outlet(0, [duration, my_transup_list[i]]);
		duration = duration + dur[i];
	};		
	post('transposed up :', my_transup_list);
	outlet(4, my_transup_list);
	outlet(5, dur);
}
	
function stretch()
{
	//List for this function should include all the note durations or x values and the stretch factor added on at the end
	var duration = 0;
	
	outlet(0, 'clear');
	var my_list = glob.my_list;
	post('-----------------------');
	post('original : ', my_list);
	var stretch_factor  = my_list.pop();
	var my_stretch_list = new Array(my_list.length);
	var i;
	for (i=0; i < glob.my_list.length; i++) {
		my_stretch_list[i] = my_list[i] * stretch_factor;
		outlet(0, [duration, my_stretch_list[i]]);
	};
	post('Stretched :', my_stretch_list);
}
​
function exponentiate() 
{
	var my_list = glob.my_list;
	var power = my_list.pop();
	
	var list_min = min(my_list)
	post('-----------------------');
	post('original : ', my_list);
	var my_quad_list = new Array(my_list.length);
	var reduced_list = new Array(my_list.length);
	var i;
	
	outlet(0, 'clear');
	for (i = 0; i < my_list.length; i++) {
		reduced_list[i] = glob.my_list[i] - list_min + 1;
    	my_quad_list[i] = Math.round(Math.pow(reduced_list[i], power) + list_min - 1);
  		outlet(0, [duration, my_quad_list[i]]);
	}​
	post('Exponentiated : ', my_quad_list);
}

function linear_transform()
/*
This function takes in a list of the x-y coordinates of MIDI file and the values a, b, c, and d and outputs transformed x-y coordinates. 
Effectively, this function allows us to transform the inputs-output pairs of any function without needing to know the actual function. 
To work properly, the input list to the function must have at least one coordinate pair (x,y) followed by the values of a, b, c, and d. */
{
	outlet(0, 'clear');
	var duration = 0;
	var my_list = arrayfromargs(arguments);
	var d = my_list.pop();
	var a = my_list.pop();
	var list_min = min(my_list)
	var my_transformed_list = new Array(my_list.length);
	var reduced_list = new Array(my_list.length);
	var i;
	post('my list:');
	post(my_list + "\n");
	for (i=0; i<my_list.length; i++) {
		reduced_list[i] = my_list[i] - list_min;
		
		my_transformed_list[i] = a*reduced_list[i]+d + list_min;
		outlet(0, [duration, my_transformed_list[i]]);
		duration = duration + dur[i];
	};	
	
	myval = my_transformed_list;
	//post('transformed list');
	//post(my_transformed_list);
 	//post("\n");
}

​
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