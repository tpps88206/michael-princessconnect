function myFunction() {
  var content = document.getElementById("content").value;
  var offset = document.getElementById("offset").value;
  var result = "";
  var sec = (90 - offset) * 1000;
  
  document.getElementById("output").value = "轉換中...";
  
  for (var line of content.split("\n")) {
    var time = line.substr(0, 4);
    
    time =  time.replace(".", ":");
    time =  time.replace("''", ":");
    
    var oldDate = new Date("2020-01-01T10:0" + time);
    
    if (!!oldDate) {
      var newDate = new Date(oldDate - sec);
    
      if (newDate.getTime() > new Date("2020-01-01T09:59:59").getTime()) {
        var zero = "";
        // 如果秒數小於 10 秒，則在前面補 0
        if (newDate.getSeconds() < 10) {
          zero = "0";
        }
        result = result + newDate.getMinutes() + ":" + zero + newDate.getSeconds() + line.substr(4) + "\n";
      }
    } else {
      result = result + line + "\n";
    }
  }
  
  document.getElementById("output").value = result;
}
