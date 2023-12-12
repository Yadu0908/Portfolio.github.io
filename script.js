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


const switchMode= document.querySelector('#mode');

console.log(switchMode);


let value= true;

switchMode.addEventListener('click', ()=>{

    if(value = false){

        document.body.style.backgroundColor= "#171717";
        document.body.style.color= "#fff";
        value= true;
    }
    
    else{

        document.body.style.backgroundColor= "rgb(218, 213, 213)";
        document.body.style.color= "Black";
        value = false;



    }
});