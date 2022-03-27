const showSubMenuDeskTop = document.getElementById("openSubMenuDeskTop");
const hiddenSubMenuDeskTop = document.getElementById("closeSubMenuDeskTop");
const subMenuDeskTop = document.getElementById("subMenuDesktop");
let menudeskTopValid = false


function openSubMenuDeskTop(){
    if(previewProductValid == true){
        closePreview();
        subMenuDeskTop.style.display = "block";
        showSubMenuDeskTop.style.display = "none"
        hiddenSubMenuDeskTop.style.display = "inline"
        menudeskTopValid = true;
    }else if(shoppingCar == true){
        closeShoppingCar();
        subMenuDeskTop.style.display = "block";
        showSubMenuDeskTop.style.display = "none"
        hiddenSubMenuDeskTop.style.display = "inline"
        menudeskTopValid = true;
    }
    else{
        subMenuDeskTop.style.display = "block";
        showSubMenuDeskTop.style.display = "none"
        hiddenSubMenuDeskTop.style.display = "inline"
        menudeskTopValid = true;
    }
}

function closeSubMenuDeskTop(){
    showSubMenuDeskTop.style.display = "inline"
    hiddenSubMenuDeskTop.style.display = "none"
    subMenuDeskTop.style.display = "none";
    menudeskTopValid = false;
}