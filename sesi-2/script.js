var hamburger = Document.querySelector(".hamb");
var navlist = Document.querySelector(".nav-list");
var links = Document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});