var myval=0;
inlets = 1;
outlets =1;

if (jsarguments.length>1)
	myval = jsarguments[1];


function list() {
	var graph_list = arrayfromargs(arguments);
	var duration = 0;
	var i;
	for (i = 0; i < graph_list.length; i = i+2 ) {
		outlet(0,[ graph_list[i], graph_list[i+1]] )
	}
}

function noteToFreq(note) {
    var a = 440; //frequency of A (coomon value is 440Hz)
    return (a / 32) * (Math.pow(2, ((note - 9) / 12)));
}