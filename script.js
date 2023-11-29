function openTab(tabname) {

let tabLinks = document.getElementsByClassName("tab-links");
console.log(tabLinks);
let tabContent= document.getElementsByClassName("tab-contents");
console.log(tabContent);

// let tc= document.()



    for(item of tabLinks){
        
        item.classList.remove("active-link");
    }
    
    for(item of tabContent){
        
        item.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    // document.getElementById(tabname).classList.add("active-tab");


}


let mode= document.getElementById("mode");
console.log(mode);

let btn= 0;
mode.addEventListener("click", ()=>{

    if(btn == 0){

        document.body.style.backgroundColor=" rgb(218, 213, 213)"
    }

    else{

        document.body.style.backgroundColor= "#171717";
    }

})