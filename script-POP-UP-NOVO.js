setTimeout(abrepopup(), 3000);

function abrepopup() {
    xvarONM = document.getElementById("popupONM");
    xvarONM.style.display = "block";
}

function fechapopup() {
    var xpopupONM = document.getElementById("popupONM");
    if (xpopupONM.style.display === "none") {
        xpopupONM.style.display = "block";
    } else {
        xpopupONM.style.display = "none";
    }
  }
