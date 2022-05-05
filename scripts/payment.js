let payCollapse = document.getElementsByClassName("paymentAccordion");
console.log(payCollapse);

var i;

for(i=0; i<payCollapse.length; i++){
    // console.log(payCollapse[i].style.display)
    payCollapse[i].addEventListener("click",function(i){
        let content = this.nextElementSibling;
        // console.log(content);
        // let arrow = this.lastElementChild.lastElementChild.lastElementChild.className;
        // let arrow = this.lastElementChild.lastElementChild.lastElementChild.style.color = "green";
       
        // console.log(i);
        
        
        // console.log(this);
        
        if(content.style.display == "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }
    })
   
}