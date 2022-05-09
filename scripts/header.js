// let childrens = document.getElementById("navigation").innerHTML;
// console.log(childrens);

// console.log("hiii");

// mobile Navigation part 

// localStorage.setItem("loginnav","false");
// localStorage.setItem("loginnav","true");
let loginStatus = localStorage.getItem("login") || "false";
// console.log(loginStatus);

if(loginStatus == "true"){
    // document.getElementById("navigation").innerHTML = null;
    document.getElementById("mobNavigation").innerHTML =` 
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="index.html">
        <span class="mobNavigationIcon">
            <i class="fa-regular fa-calendar-plus"></i>
            
            <span class="mobNavigationLable">Appintment</span>
        </span>
    </a>
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="product.html">
        <span class="mobNavigationIcon">
            <i class="fa-solid fa-pills"></i>
            <span class="mobNavigationLable">Pharmacy</span>
        </span>
    </a>
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="#">
        <span class="mobNavigationIcon">
            <i class="fa-solid fa-microscope"></i>
            <span class="mobNavigationLable">Lab Tests</span>
        </span>
    </a>
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="#">
        <span class="mobNavigationIcon">
       
            <i class="fa-solid fa-clipboard-user"></i>
            <span class="mobNavigationLable">Health Records</span>
        </span>
    </a>
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="#">
        <span class="mobNavigationIcon">
            <i class="fa-solid fa-user"></i>
            <span class="mobNavigationLable">My Account</span>
        </span>
    </a>`
}else{
    // document.getElementById("navigation").innerHTML = null;
    document.getElementById("mobNavigation").innerHTML =`
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="index.html">
        <span class="mobNavigationIcon">
            <i class="fa-solid fa-house"></i>
        
            <span class="mobNavigationLable">Home</span>
        </span>
    </a>
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="#">
        <span class="mobNavigationIcon">
            <i class="fa-solid fa-user-doctor"></i>
            <span class="mobNavigationLable">Doctors</span>
        </span>
    </a>
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="#">
        <span class="mobNavigationIcon">
            <i class="fa-solid fa-pills"></i>
            <span class="mobNavigationLable">Pharmacy</span>
        </span>
    </a>
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="#">
        <span class="mobNavigationIcon">
            <i class="fa-solid fa-microscope"></i>
            <span class="mobNavigationLable">Lab Tests</span>
        </span>
    </a>
    <a class="mobNavigationBtn mobNavigationBtn-action mobNavigationBtn-base"  href="#">
        <span class="mobNavigationIcon">
            <i class="fa-solid fa-viruses"></i>
            <span class="mobNavigationLable">Covid-19</span>
        </span>
    </a>`;
};


// //Footer part content collapse 
// let footerCollapse = document.getElementsByClassName("footerLinks-PanelHeader");
// console.log(footerCollapse);

// var i;

// for(i=0; i<footerCollapse.length; i++){

//     console.log("hii")
//     footerCollapse[i].onclick = function(){
//         console.log("hii")
//         var footerContent = this.nextElementSibling;
//         // console.log(footerContent);
       
//         if(footerContent.style.display == "block"){
//             footerContent.style.display = "none";
//         }else{
//             footerContent.style.display = "block"
//         }
        
//     }
// }
// //Footer part content collapse 
// let footerCollapse = document.getElementsByClassName("footerLinks-PanelHeader");
// // console.log(footerCollapse);

// var i;

// for(i=0; i<footerCollapse.length; i++){
//     footerCollapse[i].addEventListener("click",function(){
//         // console.log("hii")
//         var footerContent = this.nextElementSibling;
//         // console.log(footerContent);
       
//         if(footerContent.style.display == "block"){
//             footerContent.style.display = "none";
//         }else{
//             footerContent.style.display = "block"
//         }
        
//     })
// }


// console.log("payment");





















// navbar hovering effect 
let navtabs = document.getElementsByClassName("mobNavigationBtn");
let navlable = document.getElementsByClassName("mobNavigationLable");

// console.log(navtabs);
// navtabs[0].style.color = "white";
// navlable[0].style.color = "white";
// navtabs[0].style.backgroundColor = "#02475b";
// localStorage.setItem("navtab",0);

for(let i=0; i<navtabs.length; i++){
    navtabs[i].addEventListener("click", function(){
        localStorage.setItem("navtab",i);
        // navtabs[i].style.color = "white";
        // navlable[i].style.color = "white";
        // navtabs[i].style.backgroundColor = "teal";
        let navtabIndex = localStorage.getItem("navtab");
        // console.log(navtabIndex);
        for(let j=0; j<navtabs.length; j++){
            if(navtabIndex == j){
                navtabs[j].style.color = "white";
                navlable[j].style.color = "white";
                navtabs[j].style.backgroundColor = "#02475b";
            }else{
                navtabs[j].style.color = "#02475b";
                navlable[j].style.color = "#67919d";
                navtabs[j].style.backgroundColor = "white";
            }
        }

    });
    
}

// let navtabIndex = localStorage.getItem("navtab");
// console.log(navtabIndex);