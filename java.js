/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function myFunction(x) {
    x.classList.toggle("change");
}

/* window.onclick = function (event) {
    if (event.target == mySidenav) {
        mySidenav.style.display = "none";
    }
} */



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal_terms = document.getElementById('myModal_terms');

// Get the button that opens the modal
var btn_terms = document.getElementById("myBtn_terms");

// Get the <span> element that closes the modal
var span_terms = document.getElementsByClassName("close_terms")[0];

// When the user clicks the button, open the modal 
btn_terms.onclick = function () {
    modal_terms.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_terms.onclick = function () {
    modal_terms.style.display = "none";
}

/* window.onclick = function term (event) {
    if (event.target == modal_terms) {
        modal_terms.style.display = "none";
    }
} */



// Get the modal
var modal_priv = document.getElementById('myModal_priv');

// Get the button that opens the modal
var btn_priv = document.getElementById("myBtn_priv");

// Get the <span> element that closes the modal
var span_priv = document.getElementsByClassName("close_priv")[0];

// When the user clicks the button, open the modal 
btn_priv.onclick = function () {
    modal_priv.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_priv.onclick = function () {
    modal_priv.style.display = "none";
}
/* 
window.onclick = function priv (event) {
    if (event.target == modal_priv) {
        modal_priv.style.display = "none";
    }
} */
