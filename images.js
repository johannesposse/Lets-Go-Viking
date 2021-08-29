
showIMG();
closeIMG();

function closeIMG(){
     const closeIMG = document.querySelectorAll("#cImg").forEach(x => {
         x.addEventListener("click", function(){
             let modulee = document.querySelector(".module")
             modulee.style.display = "none"    
         })
     })
}

function showIMG(){    
    const showImg = document.querySelectorAll("#uImg").forEach(x => {
            x.addEventListener("click", function(){
                let modulee = document.querySelector(".module")
                modulee.style.display = "flex"
                modulee.style.backgroundImage = "url(" +  x.src + ")"
        });
    });
}