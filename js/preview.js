const  previewProduct = document.getElementById("preview");
let previewProductValid = false;


function openPreview(){
    if(menudeskTopValid == true){
        closeSubMenuDeskTop();
        previewProduct.style.display = "block";
        previewProductValid = true;
    }else if(shoppingCar == true){
        closeShoppingCar();
        previewProduct.style.display = "block";
        previewProductValid = true;
    }else{
        previewProduct.style.display = "block";
        previewProductValid = true;
    }
}

function closePreview(){
    previewProduct.style.display = "none";
    previewProductValid = false;
}
