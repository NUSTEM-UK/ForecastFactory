var firstHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var secondHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var thirdHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var forthHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function setToInitialComp() {
	$(".computer[name='A1']").val("5");
	$(".computer[name='A2']").val("10");
	$(".computer[name='A3']").val("20");
	$(".computer[name='A4']").val("25");
	$(".computer[name='B1']").val("5");
	$(".computer[name='B2']").val("10");
	$(".computer[name='B3']").val("20");
	$(".computer[name='B4']").val("25");
	$(".computer[name='C1']").val("5");
	$(".computer[name='C2']").val("10");
	$(".computer[name='C3']").val("20");
	$(".computer[name='C4']").val("25");
	$(".computer[name='D1']").val("5");
	$(".computer[name='D2']").val("10");
	$(".computer[name='D3']").val("20");
	$(".computer[name='D4']").val("25");
}

function setTo1HourComp() {
	$(".computer[name='A1']").val("5");
	$(".computer[name='A2']").val("9.37");
	$(".computer[name='A3']").val("18.452");
	$(".computer[name='A4']").val("24.1");
	$(".computer[name='B1']").val("5");
	$(".computer[name='B2']").val("8.74");
	$(".computer[name='B3']").val("16.904");
	$(".computer[name='B4']").val("23.2");
	$(".computer[name='C1']").val("5");
	$(".computer[name='C2']").val("8.11");
	$(".computer[name='C3']").val("15.32");
	$(".computer[name='C4']").val("22.3");
	$(".computer[name='D1']").val("4.55");
	$(".computer[name='D2']").val("7.48");
	$(".computer[name='D3']").val("13.772");
	$(".computer[name='D4']").val("21.4");
}

function setTo2HoursComp() {
	$(".computer[name='A1']").val("5");
	$(".computer[name='A2']").val("8.6833");
	$(".computer[name='A3']").val("16.9068");
	$(".computer[name='A4']").val("23.0672");
	$(".computer[name='B1']").val("5");
	$(".computer[name='B2']").val("7.9563");
	$(".computer[name='B3']").val("14.6551");
	$(".computer[name='B4']").val("20.9496");
	$(".computer[name='C1']").val("4.8607");
	$(".computer[name='C2']").val("7.1726");
	$(".computer[name='C3']").val("12.3734");
	$(".computer[name='C3']").val("18.547");
	$(".computer[name='D1']").val("3.9808");
	$(".computer[name='D2']").val("6.5476");
	$(".computer[name='D3']").val("10.4106");
	$(".computer[name='D4']").val("15.924");
}

function setTo3HoursComp() {
	$(".computer[name='A1']").val("5");
	$(".computer[name='A2']").val("7.9249");
	$(".computer[name='A3']").val("15.5354");
	$(".computer[name='A4']").val("21.9415");
	$(".computer[name='B1']").val("4.9348");
	$(".computer[name='B2']").val("7.3594");
	$(".computer[name='B3']").val("12.9864");
	$(".computer[name='B4']").val("18.7217");
	$(".computer[name='C1']").val("4.5883");
	$(".computer[name='C2']").val("6.6476");
	$(".computer[name='C3']").val("10.5555");
	$(".computer[name='C4']").val("15.2565");
	$(".computer[name='D1']").val("3.2848");
	$(".computer[name='D2']").val("6.0826");
	$(".computer[name='D3']").val("8.7113");
	$(".computer[name='D4']").val("12.0016");
}

function setTo4HoursComp() {
	$(".computer[name='A1']").val("4.9594");
	$(".computer[name='A2']").val("7.2048");
	$(".computer[name='A3']").val("14.225");
	$(".computer[name='A4']").val("20.7694");
	$(".computer[name='B1']").val("4.7726");
	$(".computer[name='B2']").val("6.8036");
	$(".computer[name='B3']").val("11.7031");
	$(".computer[name='B4']").val("16.715");
	$(".computer[name='C1']").val("4.1847");
	$(".computer[name='C2']").val("6.2692");
	$(".computer[name='C3']").val("9.3929");
	$(".computer[name='C4']").val("12.7803");
	$(".computer[name='D1']").val("2.6085");
	$(".computer[name='D2']").val("5.8217");
	$(".computer[name='D3']").val("7.738");
	$(".computer[name='D4']").val("9.6912");
}

function setToInitialYou() {
	$(".you[name='A1']").val("5");
	$(".you[name='A2']").val("10");
	$(".you[name='A3']").val("20");
	$(".you[name='A4']").val("25");
	$(".you[name='B1']").val("5");
	$(".you[name='B2']").val("10");
	$(".you[name='B3']").val("20");
	$(".you[name='B4']").val("25");
	$(".you[name='C1']").val("5");
	$(".you[name='C2']").val("10");
	$(".you[name='C3']").val("20");
	$(".you[name='C4']").val("25");
	$(".you[name='D1']").val("5");
	$(".you[name='D2']").val("10");
	$(".you[name='D3']").val("20");
	$(".you[name='D4']").val("25");
}

function setTo1HourYou() {
	if ($(".save")[0].checked) {
		// console.log("cheched");
		firstHour[0] = $(".you[name='A1']").val();
		firstHour[1] = $(".you[name='A2']").val();
		firstHour[2] = $(".you[name='A3']").val();
		firstHour[3] = $(".you[name='A4']").val();
		firstHour[4] = $(".you[name='B1']").val();
		firstHour[5] = $(".you[name='B2']").val();
		firstHour[6] = $(".you[name='B3']").val();
		firstHour[7] = $(".you[name='B4']").val();
		firstHour[8] = $(".you[name='C1']").val();
		firstHour[9] = $(".you[name='C2']").val();
		firstHour[10] = $(".you[name='C3']").val();
		firstHour[11] = $(".you[name='C4']").val();
		firstHour[12] = $(".you[name='D1']").val();
		firstHour[13] = $(".you[name='D2']").val();
		firstHour[14] = $(".you[name='D3']").val();
		firstHour[15] = $(".you[name='D4']").val();
	} else {
		$(".you[name='A1']").val(firstHour[0]);
		$(".you[name='A2']").val(firstHour[1]);
		$(".you[name='A3']").val(firstHour[2]);
		$(".you[name='A4']").val(firstHour[3]);
		$(".you[name='B1']").val(firstHour[4]);
		$(".you[name='B2']").val(firstHour[5]);
		$(".you[name='B3']").val(firstHour[6]);
		$(".you[name='B4']").val(firstHour[7]);
		$(".you[name='C1']").val(firstHour[8]);
		$(".you[name='C2']").val(firstHour[9]);
		$(".you[name='C3']").val(firstHour[10]);
		$(".you[name='C4']").val(firstHour[11]);
		$(".you[name='D1']").val(firstHour[12]);
		$(".you[name='D2']").val(firstHour[13]);
		$(".you[name='D3']").val(firstHour[14]);
		$(".you[name='D4']").val(firstHour[15]);
	}
}

function setTo2HoursYou() {
	if ($(".save")[0].checked) {
		// console.log("cheched");
		secondHour[0] = $(".you[name='A1']").val();
		secondHour[1] = $(".you[name='A2']").val();
		secondHour[2] = $(".you[name='A3']").val();
		secondHour[3] = $(".you[name='A4']").val();
		secondHour[4] = $(".you[name='B1']").val();
		secondHour[5] = $(".you[name='B2']").val();
		secondHour[6] = $(".you[name='B3']").val();
		secondHour[7] = $(".you[name='B4']").val();
		secondHour[8] = $(".you[name='C1']").val();
		secondHour[9] = $(".you[name='C2']").val();
		secondHour[10] = $(".you[name='C3']").val();
		secondHour[11] = $(".you[name='C4']").val();
		secondHour[12] = $(".you[name='D1']").val();
		secondHour[13] = $(".you[name='D2']").val();
		secondHour[14] = $(".you[name='D3']").val();
		secondHour[15] = $(".you[name='D4']").val();
	} else {
		$(".you[name='A1']").val(secondHour[0]);
		$(".you[name='A2']").val(secondHour[1]);
		$(".you[name='A3']").val(secondHour[2]);
		$(".you[name='A4']").val(secondHour[3]);
		$(".you[name='B1']").val(secondHour[4]);
		$(".you[name='B2']").val(secondHour[5]);
		$(".you[name='B3']").val(secondHour[6]);
		$(".you[name='B4']").val(secondHour[7]);
		$(".you[name='C1']").val(secondHour[8]);
		$(".you[name='C2']").val(secondHour[9]);
		$(".you[name='C3']").val(secondHour[10]);
		$(".you[name='C4']").val(secondHour[11]);
		$(".you[name='D1']").val(secondHour[12]);
		$(".you[name='D2']").val(secondHour[13]);
		$(".you[name='D3']").val(secondHour[14]);
		$(".you[name='D4']").val(secondHour[15]);
	}
}

function setTo3HoursYou() {
	if ($(".save")[0].checked) {
		// console.log("cheched");
		thirdHour[0] = $(".you[name='A1']").val();
		thirdHour[1] = $(".you[name='A2']").val();
		thirdHour[2] = $(".you[name='A3']").val();
		thirdHour[3] = $(".you[name='A4']").val();
		thirdHour[4] = $(".you[name='B1']").val();
		thirdHour[5] = $(".you[name='B2']").val();
		thirdHour[6] = $(".you[name='B3']").val();
		thirdHour[7] = $(".you[name='B4']").val();
		thirdHour[8] = $(".you[name='C1']").val();
		thirdHour[9] = $(".you[name='C2']").val();
		thirdHour[10] = $(".you[name='C3']").val();
		thirdHour[11] = $(".you[name='C4']").val();
		thirdHour[12] = $(".you[name='D1']").val();
		thirdHour[13] = $(".you[name='D2']").val();
		thirdHour[14] = $(".you[name='D3']").val();
		thirdHour[15] = $(".you[name='D4']").val();
	} else {
		$(".you[name='A1']").val(thirdHour[0]);
		$(".you[name='A2']").val(thirdHour[1]);
		$(".you[name='A3']").val(thirdHour[2]);
		$(".you[name='A4']").val(thirdHour[3]);
		$(".you[name='B1']").val(thirdHour[4]);
		$(".you[name='B2']").val(thirdHour[5]);
		$(".you[name='B3']").val(thirdHour[6]);
		$(".you[name='B4']").val(thirdHour[7]);
		$(".you[name='C1']").val(thirdHour[8]);
		$(".you[name='C2']").val(thirdHour[9]);
		$(".you[name='C3']").val(thirdHour[10]);
		$(".you[name='C4']").val(thirdHour[11]);
		$(".you[name='D1']").val(thirdHour[12]);
		$(".you[name='D2']").val(thirdHour[13]);
		$(".you[name='D3']").val(thirdHour[14]);
		$(".you[name='D4']").val(thirdHour[15]);
	}
}

function setTo4HoursYou() {
	if ($(".save")[0].checked) {
		// console.log("cheched");
		forthHour[0] = $(".you[name='A1']").val();
		forthHour[1] = $(".you[name='A2']").val();
		forthHour[2] = $(".you[name='A3']").val();
		forthHour[3] = $(".you[name='A4']").val();
		forthHour[4] = $(".you[name='B1']").val();
		forthHour[5] = $(".you[name='B2']").val();
		forthHour[6] = $(".you[name='B3']").val();
		forthHour[7] = $(".you[name='B4']").val();
		forthHour[8] = $(".you[name='C1']").val();
		forthHour[9] = $(".you[name='C2']").val();
		forthHour[10] = $(".you[name='C3']").val();
		forthHour[11] = $(".you[name='C4']").val();
		forthHour[12] = $(".you[name='D1']").val();
		forthHour[13] = $(".you[name='D2']").val();
		forthHour[14] = $(".you[name='D3']").val();
		forthHour[15] = $(".you[name='D4']").val();
	} else {
		$(".you[name='A1']").val(forthHour[0]);
		$(".you[name='A2']").val(forthHour[1]);
		$(".you[name='A3']").val(forthHour[2]);
		$(".you[name='A4']").val(forthHour[3]);
		$(".you[name='B1']").val(forthHour[4]);
		$(".you[name='B2']").val(forthHour[5]);
		$(".you[name='B3']").val(forthHour[6]);
		$(".you[name='B4']").val(forthHour[7]);
		$(".you[name='C1']").val(forthHour[8]);
		$(".you[name='C2']").val(forthHour[9]);
		$(".you[name='C3']").val(forthHour[10]);
		$(".you[name='C4']").val(forthHour[11]);
		$(".you[name='D1']").val(forthHour[12]);
		$(".you[name='D2']").val(forthHour[13]);
		$(".you[name='D3']").val(forthHour[14]);
		$(".you[name='D4']").val(forthHour[15]);
	}
}

setToInitialYou();
setToInitialComp();