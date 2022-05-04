// header part starts here 

import { navbar } from "../components/navbar.js";
document.getElementById("fixedHeader").innerHTML = navbar();

// header part end here 

// // Page Content expand buttom for mobile device 

let expandData = () => {
    console.log("hello there....")
    document.getElementById("secContent").style.maxHeight = "none";
    document.getElementById("expandBtn").style.display = "none";
}
document.getElementById("expandBtn").addEventListener("click", expandData);


// navbar hovering effect 
let navtabs = document.getElementsByClassName("mobNavigationBtn");
let navlable = document.getElementsByClassName("mobNavigationLable");

// console.log(navtabs);
navtabs[0].style.color = "white";
navlable[0].style.color = "white";
navtabs[0].style.backgroundColor = "#02475b";
localStorage.setItem("navtab",0);

// for(let i=0; i<navtabs.length; i++){
//     navtabs[i].addEventListener("click", function(){
//         localStorage.setItem("navtab",i);
//         // navtabs[i].style.color = "white";
//         // navlable[i].style.color = "white";
//         // navtabs[i].style.backgroundColor = "teal";
//         let navtabIndex = localStorage.getItem("navtab");
//         // console.log(navtabIndex);
//         for(let j=0; j<navtabs.length; j++){
//             if(navtabIndex == j){
//                 navtabs[j].style.color = "white";
//                 navlable[j].style.color = "white";
//                 navtabs[j].style.backgroundColor = "#02475b";
//             }else{
//                 navtabs[j].style.color = "#02475b";
//                 navlable[j].style.color = "#67919d";
//                 navtabs[j].style.backgroundColor = "white";
//             }
//         }

//     });
    
// }

// let navtabIndex = localStorage.getItem("navtab");
// console.log(navtabIndex);
