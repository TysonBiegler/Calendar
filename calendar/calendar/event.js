
/*
------------------------------------------------------------
Function to activate form button to open the slider.
------------------------------------------------------------
*/
function open_panel() {
    slideIt();
    let a = document.getElementById("sidebar");
    let b = document.getElementById("sidebar2");

    a.setAttribute("id", "sidebar1");
    a.setAttribute("onclick", "close_panel()");
    a.setAttribute("z-index", "10");
    b.style.visibility = "hidden";
}
/*
------------------------------------------------------------
Function to slide the sidebar form (open form)
------------------------------------------------------------
*/
function slideIt() {
    let slidingDiv = document.getElementById("slider");
    let stopPosition = 0;
    if (parseInt(slidingDiv.style.right) < stopPosition) {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) + 2 + "px";
        setTimeout(slideIt, 1);
    }
}
/*
------------------------------------------------------------
Function to activate form button to close the slider.
------------------------------------------------------------
*/
function close_panel() {
    slideIn();
    a = document.getElementById("sidebar1");
    b = document.getElementById("sidebar2")
    a.setAttribute("id", "sidebar");
    a.setAttribute("onclick", "open_panel()");
    b.style.visibility = "visible";
}
/*
------------------------------------------------------------
Function to slide the sidebar form (slide in form)
------------------------------------------------------------
*/
function slideIn() {
    let slidingDiv = document.getElementById("slider");
    let stopPosition = -342;
    if (parseInt(slidingDiv.style.right) > stopPosition) {
        slidingDiv.style.right = parseInt(slidingDiv.style.right) - 2 + "px";
        setTimeout(slideIn, 1);
    }
}

/*
------------------------------------------------------------
Function to hide the slidebar if another slidebar is open
------------------------------------------------------------
*/

function hidebar() {
    let hidingDiv = document.getElementById("sidebar1");

    if (hidingDiv === hidingDiv) {
        setAttribute("z-index", "-1");
    }
}