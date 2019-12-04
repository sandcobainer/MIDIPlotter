
inlets = 1;
outlets = 2;


if (jsarguments.length>1)
	myval = jsarguments[1];

pitches = []
durations = []

function list() {
	
	my_list = arrayfromargs(arguments);
	var i;
	post('parsing :\n');
	my_list.push(500);
	my_list.push(500);
	for (i = 0; i < my_list.length-2; i++) {
		if (i%2 ==0) {
			pitches.push(my_list[i]);
			durations.push()
			delayThis('post(glob.pitch);',500);
		}
	}
}


function posting() {
	post(glob.pitch + "\n");
}

var Delayer=new Task(delayed);
var delayValue='';
function delayed(){
	eval(delayValue);
	delayValue='';
}
function delayThis(a,b){
	delayValue=a;
	Delayer.schedule(b);
}