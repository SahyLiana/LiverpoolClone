function courseChoice() {
    var x = document.getElementById("courseChoices");
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function closeAllMenu() {
    var x = document.getElementsByClassName("content");
    var i = 0;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  }
  function clickNav(eltId) {
    var x = document.getElementsByClassName("content");
    var i = 0;
    for (i = 0; i < x.length; i++) {
      // Toggle display of selected element
      if (x[i].id == eltId) {
        if (x[i].style.display == "block") {
          x[i].style.display = "none";
        } else {
          x[i].style.display = "block";
        }
      } else {
        // Close others
        x[i].style.display = "none";
      }
    }
  }
  function clickSubNav(event) {
    tabbut = document.getElementsByClassName("tabbut");
    for (i = 0; i < tabbut.length; i++) {
      tabbut[i].className = tabbut[i].className.replace("active", "");
    }

    event.currentTarget.className += " active";
  }
function openNav() {
    if (document.getElementById("nav").style.width == "65%") {
      document.getElementById("nav").style.width = "0px";
      document.getElementById("subnavStudy").style.width = "0px";
      document.getElementById("subnavResearch").style.width = "0px";
      document.getElementById("subnavAbout").style.width = "0px";
      document.getElementById("nav").style.zIndex = "0";
      // document.getElementById("test").style.backgroundColor = "white";
      document.getElementById("test").style.opacity = "1";
    //   document.getElementById("test").style.overflowY = "hidden";

      document.getElementById("test").style.marginLeft = "0px";
    } else {
      document.getElementById("nav").style.width = "65%";
    //   document.getElementById("test").style.overflowY = "hidden";
   
      document.getElementById("nav").style.zIndex = "1";
      // document.getElementById("test").style.backgroundColor =
      //   "rgba(0,0,0,0.5)";

      document.getElementById("test").style.opacity = "0.5";
      // document.getElementById("nav").style.backgroundColor = "white";
      document.getElementById("nav").style.opacity = "1";

      // document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
      document.getElementById("test").style.marginLeft = "65%";

      // document.body.style.marginLeft = "0px";
      // document.body.style.backgroundColor = "white";
    }
  }
  function openNavStudy() {
    document.getElementById("nav").style.zIndex = "1";
    document.getElementById("subnavStudy").style.zIndex = "2";
    document.getElementById("subnavStudy").style.width = "65%";
    // document.getElementById("nav").style.position = "relative";
    document.getElementById("nav").style.marginRight = "65%";
  }
  function openNavResearch() {
    document.getElementById("nav").style.zIndex = "1";
    document.getElementById("subnavResearch").style.zIndex = "3";
    document.getElementById("subnavResearch").style.width = "65%";
    // document.getElementById("nav").style.position = "relative";
    document.getElementById("nav").style.marginRight = "65%";
  }
  function openNavAbout() {
    document.getElementById("nav").style.zIndex = "1";
    document.getElementById("subnavAbout").style.zIndex = "3";
    document.getElementById("subnavAbout").style.width = "65%";
    // document.getElementById("nav").style.position = "relative";
    document.getElementById("nav").style.marginRight = "65%";
  }
  function backMainMenu() {
    document.getElementById("subnavStudy").style.width = "0px";
    document.getElementById("subnavResearch").style.width = "0px";
    document.getElementById("subnavAbout").style.width = "0px";
    // document.getElementById("nav").style.position = "fixed";
    document.getElementById("nav").style.zIndex = "1";

    document.getElementById("nav").style.marginRight = "0px";
  }