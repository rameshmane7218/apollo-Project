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





//carousal

let carousalPic = [
    {
        index:"1",
        img:"https://newassets.apollo247.com/images/banners/First3.jpg",
    },
    {
        index:"2",
        img:"https://newassets.apollo247.com/images/banners/Super_30.jpg",
    },
    {
        index:"3",
        img:"https://newassets.apollo247.com/images/banners/Sebamed05.jpg",
    },
    {
        index:"4",
        img:"https://newassets.apollo247.com/images/banners/Whey-Proteins_May5th.jpg",
    },
    {
        index:"5",
        img:"https://newassets.apollo247.com/images/banners/Web_Circle.jpg",
    },
    {
        index:"6",
        img:"https://newassets.apollo247.com/images/banners/CircleMembership.jpg",
    },
    {
        index:"7",
        img:"https://newassets.apollo247.com/images/banners/internationalConsult.png",
    },
    {
        index:"8",
        img:"https://newassets.apollo247.com/images/banners/ApolloHomeCare.jpg",
    },
    {
        index:"9",
        img:"https://newassets.apollo247.com/images/banners/vaccination.jpg",
    },
    {
        index:"10",
        img:"https://newassets.apollo247.com/images/banners/HealthQueries.png",
    },
    {
        index:"11",
        img:"https://newassets.apollo247.com/images/banners/post-covid.jpg",
    },
    {
        index:"12",
        img:"https://newassets.apollo247.com/images/banners/pharma_2Feb.png",
    },
    {
        index:"13",
        img:"https://newassets.apollo247.com/images/banners/pharma_2Feb.png",
    },
    {
        index:"14",
        img:"https://newassets.apollo247.com/images/banners/consult_2Feb.png",
    },
    {
        index:"15",
        img:"https://newassets.apollo247.com/images/circle/banners/consult.png",
    },
]


let sliderPics = document.getElementById("slideDiv");
carousalPic.forEach(({index,img})=>{
    let picDiv = document.createElement("div");
    picDiv.setAttribute("class","slideDivPic");
    
    // picDiv.i = index;

    let pic = document.createElement("img");
    pic.src = img;
    // pic.height = "100%"
    // pic.width = "100%"
    // pic.style.height = "100%";
    // pic.style.width = "100%";

    picDiv.append(pic);

    sliderPics.append(picDiv);
})

console.log(window.innerWidth);