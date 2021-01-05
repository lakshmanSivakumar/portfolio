var menu = document.getElementById("menu");
var r = document.getElementsByClassName("links-2");

function ham() 
{
    menu.style.display = 'hidden';
    if (r[0].style.display == 'none') 
    {
        menu.src = "./images/icon-close.svg";
        menu.style.display = 'block';
        r[0].style.display = "block";
    }
    else 
    {
        menu.src = "./images/icon-hamburger.svg";
        menu.style.display = 'block';
        r[0].style.display = "none";
    }
}

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "grid";
}
 