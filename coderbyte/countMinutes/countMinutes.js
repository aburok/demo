function countMinutes(str){
	var timeArray = str.split('-');
	var start = parse2Minutes(timeArray[0]);
	var end = parse2Minutes(timeArray[1]);
	if (start > end)
		return(24 * 60 - start) + end;
	return end - start;
}

function parse2Minutes(str){
	var time = parseHour(str);
	return parseInt(time[1], 10) * 60 
		+ parseInt(time[2], 10) 
		+ (time[3]==='pm' ? 12*60 : 0);
}

function parseHour(str){
	return /^(\d{1,2})\:(\d{2})(am|pm)$/.exec(str);
}

