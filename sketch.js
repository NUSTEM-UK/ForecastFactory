var colourGradient = palette('tol-rainbow', 500);
console.log(colourGradient);

function convertHex(hex, opacity) {
	r = parseInt(hex.substr(0, 2), 16);
	g = parseInt(hex.substr(2, 2), 16);
	b = parseInt(hex.substr(4, 2), 16);

	console.log(hex);
	console.log(g);

	result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
	return result;
}

function tempToColour(temp) {
	console.log(temp);
	if (typeof temp === 'undefined' || !temp || temp == "-") {
		temp = 0;
	}
	temp = parseFloat(temp);
	console.log("t: " + temp);

	offsetTemp = temp + 5;
	console.log("ot: " + offsetTemp);

	finalTemp = round((offsetTemp/35)*500);
	if (finalTemp >= 500)
	{
		finalTemp = 499;
	}
	else if (finalTemp < 0)
	{
		finalTemp = 0;
	}
	console.log("ft: " + finalTemp);

	
	hexColour = colourGradient[finalTemp];
	console.log(hexColour);

	colour = convertHex(hexColour, 100);

	return colour;
}

function setup() {
	createCanvas(1800, 800);
	rectMode(CORNER);
}

function draw() {
	stroke(0);
	noFill();
	for (var x = 0; x < 800; x += 200) {
		for (var y = 0; y < 800; y += 200) {
			switch((x/50) + (y/200)) {
			  case 0:
				var temp = $(".you[name='A1']").val();
			    console.log("temp:" + temp);
				fill(tempToColour(temp));
			    break;
			  case 1:
			    var temp = $(".you[name='B1']").val();
				fill(tempToColour(temp));
			    break;
			  case 2:
			    var temp = $(".you[name='C1']").val();
				fill(tempToColour(temp));
			    break;
			  case 3:
			    var temp = $(".you[name='D1']").val();
				fill(tempToColour(temp));
			    break;
			  case 4:
			    var temp = $(".you[name='A2']").val();
				fill(tempToColour(temp));
			    break;
			  case 5:
			    var temp = $(".you[name='B2']").val();
				fill(tempToColour(temp));
			    break;
			  case 6:
			    var temp = $(".you[name='C2']").val();
				fill(tempToColour(temp));
			    break;
			  case 7:
			    var temp = $(".you[name='D2']").val();
				fill(tempToColour(temp));
			    break;
			  case 8:
			    var temp = $(".you[name='A3']").val();
				fill(tempToColour(temp));
			    break;
			  case 9:
			    var temp = $(".you[name='B3']").val();
				fill(tempToColour(temp));
			    break;
			  case 10:
			    var temp = $(".you[name='C3']").val();
				fill(tempToColour(temp));
			    break;
			  case 11:
			    var temp = $(".you[name='D3']").val();
				fill(tempToColour(temp));
			    break;
			  case 12:
			    var temp = $(".you[name='A4']").val();
				fill(tempToColour(temp));
			    break;
			  case 13:
			    var temp = $(".you[name='B4']").val();
				fill(tempToColour(temp));
			    break;
			  case 14:
			    var temp = $(".you[name='C4']").val();
				fill(tempToColour(temp));
			    break;
			  case 15:
			    var temp = $(".you[name='D4']").val();
				fill(tempToColour(temp));
			    break;
			  default:
			    console.log("didn't work");
			    noFill();
			}
			rect(x, y, 200, 200);
		}
	}
	for (var x = 1000; x < 1800; x += 200) {
		for (var y = 0; y < 800; y += 200) {
			switch(((x-1000)/50) + (y/200)) {
			  case 0:
				var temp = $(".computer[name='A1']").val();
			    console.log("temp:" + temp);
				fill(tempToColour(temp));
			    break;
			  case 1:
			    var temp = $(".computer[name='B1']").val();
				fill(tempToColour(temp));
			    break;
			  case 2:
			    var temp = $(".computer[name='C1']").val();
				fill(tempToColour(temp));
			    break;
			  case 3:
			    var temp = $(".computer[name='D1']").val();
				fill(tempToColour(temp));
			    break;
			  case 4:
			    var temp = $(".computer[name='A2']").val();
				fill(tempToColour(temp));
			    break;
			  case 5:
			    var temp = $(".computer[name='B2']").val();
				fill(tempToColour(temp));
			    break;
			  case 6:
			    var temp = $(".computer[name='C2']").val();
				fill(tempToColour(temp));
			    break;
			  case 7:
			    var temp = $(".computer[name='D2']").val();
				fill(tempToColour(temp));
			    break;
			  case 8:
			    var temp = $(".computer[name='A3']").val();
				fill(tempToColour(temp));
			    break;
			  case 9:
			    var temp = $(".computer[name='B3']").val();
				fill(tempToColour(temp));
			    break;
			  case 10:
			    var temp = $(".computer[name='C3']").val();
				fill(tempToColour(temp));
			    break;
			  case 11:
			    var temp = $(".computer[name='D3']").val();
				fill(tempToColour(temp));
			    break;
			  case 12:
			    var temp = $(".computer[name='A4']").val();
				fill(tempToColour(temp));
			    break;
			  case 13:
			    var temp = $(".computer[name='B4']").val();
				fill(tempToColour(temp));
			    break;
			  case 14:
			    var temp = $(".computer[name='C4']").val();
				fill(tempToColour(temp));
			    break;
			  case 15:
			    var temp = $(".computer[name='D4']").val();
				fill(tempToColour(temp));
			    break;
			  default:
			    console.log("didn't work");
			    noFill();
			}
			rect(x, y, 200, 200);
		}
	}
}