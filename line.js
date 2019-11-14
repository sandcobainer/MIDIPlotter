function list()
{
	var a = arrayfromargs(arguments);
	post("received list " + a + "\n");
	for (var i =1; i < a.length; i++)
	{
		outlet(0, a[i-1],a[i]);
	}
	
}

function noteToFreq(note) {
    var a = 440; //frequency of A (coomon value is 440Hz)
    return (a / 32) * (2 ** ((note - 9) / 12));
}