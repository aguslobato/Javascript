window.addEventListener("scroll", function(){//animacion navbar para que se posicione fixed con el scroll
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
 })   