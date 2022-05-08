// header part starts here 
import { navbar } from "../components/navbar.js";
document.getElementById("fixedHeader").innerHTML = navbar();

// header part starts here 
import { footer } from "../components/footer.js";
document.getElementById("footerRoot").innerHTML = footer();


//Footer part content collapse 
let footerCollapse = document.getElementsByClassName("footerLinks-PanelHeader");
// console.log(footerCollapse);

var i;

for(i=0; i<footerCollapse.length; i++){

    // console.log("hii");
    footerCollapse[i].onclick = function(){
        // console.log("hii");
        var footerContent = this.nextElementSibling;
        // console.log(footerContent);
       
        if(footerContent.style.display == "block"){
            footerContent.style.display = "none";
        }else{
            footerContent.style.display = "block"
        }
        
    }
}