var gradientColours = [[25,6,140], [241,245,37]];

function pickHex(color1, color2, weight) {
	console.log(color1);
	console.log(color2);
    var w1 = weight;
    var w2 = 1 - w1;
    console.log(w1);
    console.log(w2);
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
       
    return rgb;
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
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 1:
			    var temp = $("input[name='B1']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 2:
			    var temp = $("input[name='C1']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 3:
			    var temp = $("input[name='D1']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 4:
			    var temp = $("input[name='A2']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 5:
			    var temp = $("input[name='B2']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 6:
			    var temp = $("input[name='C2']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 7:
			    var temp = $("input[name='D2']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 8:
			    var temp = $("input[name='A3']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 9:
			    var temp = $("input[name='B3']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 10:
			    var temp = $("input[name='C3']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 11:
			    var temp = $("input[name='D3']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 12:
			    var temp = $("input[name='A4']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 13:
			    var temp = $("input[name='B4']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 14:
			    var temp = $("input[name='C4']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  case 15:
			    var temp = $("input[name='D4']").val();
			    var colour = pickHex(gradientColours[0], gradientColours[1], (temp/30));
			    console.log(colour);
			    fill(colour[0], colour[1], colour[2]);
			    break;
			  default:
			    console.log("didn't work");
			    noFill();
			}
			rect(x, y, 100, 100);
		}
	}
}