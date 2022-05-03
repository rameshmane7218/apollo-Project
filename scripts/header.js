// let childrens = document.getElementById("navigation").innerHTML;
// console.log(childrens);

console.log("hiii");

// mobile Navigation part 

// localStorage.setItem("login","false");
localStorage.setItem("login","true");
let loginStatus = localStorage.getItem("login");
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
