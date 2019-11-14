var myval=0;
inlets = 1;
outlets =1;

if (jsarguments.length>1)
	myval = jsarguments[1];


function list() {
	var my_list = arrayfromargs(arguments);
	var duration = 0;
	var i;
	for (i = 0; i < my_list.length; i++) {
		if (i%2 ==0) {
			my_list[i] = noteToFreq(my_list[i])
		}
	}
	outlet(0,my_list);
}

function noteToFreq(note) {
    var a = 440; //frequency of A (coomon value is 440Hz)
    return (a / 32) * (Math.pow(2, ((note - 9) / 12)));
}