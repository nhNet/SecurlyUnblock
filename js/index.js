document.querySelector("#search-bar").addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
      if(document.querySelector("#search-bar").value==''){
          document.querySelector("#search-bar").placeholder='Fill this in with a website to unblock!';
      }else{
            document.querySelector(".search-icon").click();
      }
  }
});

document.querySelector(".search-icon").onclick = function(){
    var sValue = split(document.querySelector("#search-bar").value,'__:P__');
    document.getElementById('removeSecurly').src = sValue[0];
    var att = document.createAttribute("style");
    att.value = sValue[1];
    document.getElementById('removeSecurly').setAttributeNode(att); 
}
document.querySelector(".close-icon").onclick = function(){
    window.location='https://nhnet.github.io/loadingScreens/leaveConfirm.html';
}
