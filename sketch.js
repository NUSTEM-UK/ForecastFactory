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

	offsetTemp = temp + 10;
	console.log("ot: " + offsetTemp);

	roundedTemp = round(offsetTemp, 1);
	console.log("rt: " + roundedTemp);

	finalTemp = roundedTemp*10;
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
	// bg = loadImage('');
	createCanvas(400, 400);
	background(200);
	rectMode(CORNER);
}

function draw() {
	stroke(0);
	noFill();
	for (var x = 0; x < width; x += width/4) {
		for (var y = 0; y < height; y += height/4) {
			switch((x/25) + (y/100)) {
			  case 0:
				var temp = $("input[name='A1']").val();
			    console.log("temp:" + temp);
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 1:
			    var temp = $("input[name='B1']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 2:
			    var temp = $("input[name='C1']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 3:
			    var temp = $("input[name='D1']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 4:
			    var temp = $("input[name='A2']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 5:
			    var temp = $("input[name='B2']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 6:
			    var temp = $("input[name='C2']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 7:
			    var temp = $("input[name='D2']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 8:
			    var temp = $("input[name='A3']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 9:
			    var temp = $("input[name='B3']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
			    // fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 10:
			    var temp = $("input[name='C3']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 11:
			    var temp = $("input[name='D3']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 12:
			    var temp = $("input[name='A4']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 13:
			    var temp = $("input[name='B4']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 14:
			    var temp = $("input[name='C4']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  case 15:
			    var temp = $("input[name='D4']").val();
			    // var colour = pickHex(gradientColours[0], gradientColours[1], ((temp+10)/50));
			    // console.log(colour);
				// fill(colour[0], colour[1], colour[2]);
				fill(tempToColour(temp));
			    break;
			  default:
			    console.log("didn't work");
			    noFill();
			}
			rect(x, y, 100, 100);
		}
	}
}