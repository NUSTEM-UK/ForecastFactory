// var gradientColours = [[146,0,230], [226,223,25]]; 

var colourGradient = palette('tol-rainbow', 500);
console.log(colourGradient);

// function pickHex(color1, color2, weight) {
// 	console.log(color1);
// 	console.log(color2);
//     var w1 = weight;
//     var w2 = 1 - w1;
//     console.log(w1);
//     console.log(w2);
//     var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
//         Math.round(color1[1] * w1 + color2[1] * w2),
//         Math.round(color1[2] * w1 + color2[2] * w2)];
       
//     return rgb;
// }

function hexToRGB(h) {
	let r = 0, g = 0, b = 0;

	// 3 digits
	if (h.length == 4) {
		r = "0x" + h[1] + h[1];
		g = "0x" + h[2] + h[2];
		b = "0x" + h[3] + h[3];

		// 6 digits
	} else if (h.length == 7) {
		r = "0x" + h[1] + h[2];
		g = "0x" + h[3] + h[4];
		b = "0x" + h[5] + h[6];
	}

	return "rgb(" + +r + "," + +g + "," + +b + ")";
}

function convertHex(hex, opacity) {
	// hex = hex.replace('#', '');
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
	offsetTemp = temp + 10.0;
	console.log(offsetTemp);
	roundedTemp = round(offsetTemp, 1);
	console.log(roundedTemp);
	// colour = hexToRGB(colourGradient[roundedTemp * 10]);
	colourIndex = parseInt(roundedTemp);
	console.log(colourIndex);
	hexColour = colourGradient[colourIndex];
	console.log(hexColour);
	colour = convertHex(hexColour, 100);
	// colour = colourGradient[roundedTemp * 10];
	return colour;
	// normalisedTemp = offsetTemp/50;
	// console.log(normalisedTemp);
	// var colour = pickHex(gradientColours[0], gradientColours[1], normalisedTemp;
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
					var temp = parseFloat(($("input[name='A1']").val()));
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