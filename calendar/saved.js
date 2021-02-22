
/*
------------------------------------------------------------
Function to activate form button to open the slider.
------------------------------------------------------------
*/
function open_panel2() {
    slideIt2();
    let a = document.getElementById("sidebar2");
    let b = document.getElementById("sidebar");
    a.setAttribute("id", "sidebar3");
    a.setAttribute("onclick", "close_panel2()");
    b.style.visibility = "hidden";
}
/*
------------------------------------------------------------
Function to slide the sidebar form (open form)
------------------------------------------------------------
*/
function slideIt2() {
    let slidingDiv = document.getElementById("slider2");
    let stopPosition = 0;
    if (parseInt(slidingDiv.style.right) < stopPosition) {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) + 2 + "px";
        setTimeout(slideIt2, 1);
    }
}
/*
------------------------------------------------------------
Function to activate form button to close the slider.
------------------------------------------------------------
*/
function close_panel2() {
    slideIn2();
    a = document.getElementById("sidebar3");
    b = document.getElementById("sidebar");
    a.setAttribute("id", "sidebar2");
    a.setAttribute("onclick", "open_panel2()");
    b.style.visibility = "visible";
}
/*
------------------------------------------------------------
Function to slide the sidebar form (slide in form)
------------------------------------------------------------
*/
function slideIn2() {
    let slidingDiv = document.getElementById("slider2");
    let stopPosition = -342;
    if (parseInt(slidingDiv.style.right) > stopPosition) {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) - 2 + "px";
        setTimeout(slideIn2, 1);
    }
}