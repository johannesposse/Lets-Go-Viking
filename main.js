let menuIco = document.querySelector("#menuIco");
let mobileMenu = document.querySelector(".mobileMenu");
mobileMenu.style.display = "none";

menuIco.addEventListener("click", function(){
    

    if(mobileMenu.style.display === "none"){
        mobileMenu.style.display = "flex"
        mobileMenu.style.webkitAnimationName = "slide-right";
        mobileMenu.style.webkitAnimationDuration =".5s";

    }
    else{
        // mobileMenu.style.webkitAnimationName = "slide-left";
        // mobileMenu.style.webkitAnimationDuration =".5s";
        mobileMenu.style.display = "none"
    }
})




function sendEmail(){

    let email = document.querySelector("#email");
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let messages = document.querySelector("#message");

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "johannesposse@gmail.com",
        Password : "6B7ADAB750FBA2C91FB8E53C92A039FAA845",
        To : 'johannesposse@gmail.com',
        From : "johannesposse@gmail.com",
        Subject : "Nytt meddelande från Let's Go Viking",
        Body : "Förnamn: " + firstName.value + "<br>" + "Efternamn: " + lastName.value + "<br>" + "Epost: " + email.value + "<br>" +"Meddelande:"+ messages.value
    }).then(
    message => document.querySelector("#pConfirm").innerText = message,
    confirm()
    );
}

function confirm(){
    if(message => document.querySelector("#pConfirm").innerText == "OK"){
        document.querySelector(".confirm").style.backgroundColor ="green"
    }else{
        document.querySelector(".confirm").style.backgroundColor ="red"
    }

    document.querySelector(".confirm").style.display ="block",
    document.querySelector(".confirm").style.webkitAnimationName = "slide-right",
    document.querySelector(".confirm").style.webkitAnimationDuration =".5s"

}
