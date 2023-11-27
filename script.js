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
