function calculate() {
  var content = document.getElementById("content").value;
  var offset = document.getElementById("offset").value;
  var result = "";
  var sec = (90 - offset) * 1000;
  
  document.getElementById("output").value = "转换中...";
  
  for (var line of content.split("\n")) {
    var time = line.substr(0, 4);
    
    time =  time.replace(".", ":");
    time =  time.replace("'", ":");
    
    // If the time does not add a colon, it will be processed separately
    if (time.indexOf(":") < 0) {
    	time = noSymbolTransform(time);
    }
    
    var oldDate = new Date("2020-01-01T10:0" + time);
    
        
    if (!isNaN(oldDate)) {
      var newDate = new Date(oldDate - sec);
    
      if (newDate.getTime() > new Date("2020-01-01T09:59:59").getTime()) {
        var zero = "";
        // If the number of seconds is less than 10 seconds, add 0 in front
        if (newDate.getSeconds() < 10) {
          zero = "0";
        }
        result = result + newDate.getMinutes() + ":" + zero + newDate.getSeconds() + line.substr(4) + "\n";
      }
    } else {
    	// Text line without time
      result = result + line + "\n";
    }
  }
  
  document.getElementById("output").value = result;
}

function noSymbolTransform(time) {
	var i = parseInt(time);
  
  if (i > 99) {
  	i = i - 100;
    if (i > 9) {
    	return "1:" + i;
    } 
    return "1:0" + i;
  } else {
  	return "0:" + i;
  }
}
