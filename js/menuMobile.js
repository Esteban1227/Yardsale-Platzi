const subMenuMobile = document.getElementById("subMenuMobile");
const bodyScroll = document.getElementById("body");
let menuMobileValid = false;

function openSubMenuMobile(){
    if(shoppingCar == true){
        closeShoppingCar()
        subMenuMobile.style.display = "block";
        bodyScroll.style.overflowY = "hidden"
        menuMobileValid = true;
    }else if(previewProductValid == true){
        closePreview();
        subMenuMobile.style.display = "block";
        bodyScroll.style.overflowY = "hidden"
        menuMobileValid = true;
    }
    else{
        subMenuMobile.style.display = "block";
        bodyScroll.style.overflowY = "hidden"
        menuMobileValid = true;
    }
}

function closeSubMenuMobile(){
    subMenuMobile.style.display = "none";
    bodyScroll.style.overflowY = "scroll"
    menuMobileValid = false;
}