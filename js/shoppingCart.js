const showShoppingCar = document.getElementById("shoppingCar");
let shoppingCar = false;


function openShoppingCar() {
    if(menudeskTopValid == true){
        closeSubMenuDeskTop();
        showShoppingCar.style.display = "block";
        shoppingCar = true;
    }else if(previewProductValid == true){
        closePreview();
        showShoppingCar.style.display = "block";
        shoppingCar = true;
    }else if(menuMobileValid == true){
        closeSubMenuMobile();
        showShoppingCar.style.display = "block";
        shoppingCar = true;
    }
    
    else{
        showShoppingCar.style.display = "block";
        shoppingCar = true;
    } 
}
function closeShoppingCar() {
    showShoppingCar.style.display = "none";
    shoppingCar = false;
}