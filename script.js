const share = document.querySelector(".share-icon");
const popup = document.querySelector(".popup");


share.addEventListener("click", function(){
    popup.classList.toggle("active");

    if(popup.classList.contains("active")){
        share.style.color = "hsl(210, 46%, 95%)";
        share.style.backgroundColor = "hsl(214, 17%, 51%)";
    }else{
        share.style.color = "";
        share.style.backgroundColor = "";
    }
    
    
})