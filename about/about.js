function box2() {
    var elem = document.getElementById("box2");   
    var pos = 64;
    var id = setInterval(frame, 13);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.height = pos + '%'; 
      }
    }
  }
  function box3() {
    var elem = document.getElementById("box3");   
    var pos = 64;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.height = pos + '%'; 
      }
    }
  }
  function box1() {
    var elem = document.getElementById("box1");   
    var pos = 16;
    var id = setInterval(frame, 20);
    function frame() {
      if (pos == 80) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.height = pos + '%'; 
      }
    }
  }