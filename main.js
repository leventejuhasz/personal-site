function play() {
    document.getElementById("name-pronunciation").play();
  }
  
  function preventDefaultAction(evt) {
    evt.preventDefault();
  }
  
  window.addEventListener("dblclick", preventDefaultAction, false);
  