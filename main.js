var navstate = false;

function nav() {
    navstate == true ? navstate = false : navstate = true;
    navstate == true ? document.getElementById("sideNav").style.width = "250px" : document.getElementById("sideNav").style.width = "0px"
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}
