const preloader = document.querySelector(".preloader");

window.addEventListener("load",removePreloader);

function removePreloader(){
    preloader.classList.add("end-preloader"); 
}



