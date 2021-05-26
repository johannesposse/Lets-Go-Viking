let menuIco = document.querySelector("#menuIco");
menuIco.addEventListener("click", function(){
    let mobileMenu = document.querySelector(".mobileMenu")

    if(mobileMenu.style.display === "none"){
        mobileMenu.style.display = "flex"
    }else{
        mobileMenu.style.display = "none"
    }
})