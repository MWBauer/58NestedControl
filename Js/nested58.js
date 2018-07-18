var passes = 0;
    var failures = 0;
    var student = 1;
    var result;
    
    while(student <= 10) {
      result = window.prompt("Enter result (1=pass, 2=Fail)", "0");
      if(result == "1")
        passes += 1;
      else
        failures += 1;
      student += 1;
    }
document.writeln("<h1>Examination Results</h1>");
document.writeln("Passed: " + passes + "<br/>Failed: " + failures);

if(passes > 8)
  document.writeln("<br/>Raise Tuition");
