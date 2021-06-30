document.getElementById("mySidebar").style.width = "0";
function openCloseNav() {
    if (document.getElementById("mySidebar").style.width === "0px") {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.overflowX = "hidden";
    }
    else {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

}
