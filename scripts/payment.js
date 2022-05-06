let payCollapse = document.getElementsByClassName("paymentAccordion");
// console.log(payCollapse);

var i;

for (i = 0; i < payCollapse.length; i++) {
    // console.log(payCollapse[i].style.display)
    payCollapse[i].addEventListener("click", function (i) {
        let content = this.nextElementSibling;
        // console.log(content);
        // let arrow = this.lastElementChild.lastElementChild.lastElementChild.className;
        // let arrow = this.lastElementChild.lastElementChild.lastElementChild.style.color = "green";

        // console.log(i);


        // console.log(this);

        if (content.style.display == "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    })

}










//upi payment process

let upiLast = document.getElementsByClassName("upiLast");

// console.log(upiLast);


for (let i = 0; i < upiLast.length; i++) {
    upiLast[i].addEventListener("click", function () {
        event.preventDefault();
        let bank = this.innerText;
        // console.log(bank);

        let inputFild = document.getElementById("upiInputBox").value;
        // console.log('inputFild:', inputFild)

        document.getElementById("upiInputBox").value = `${inputFild}${bank}`;

        let userUpi = document.getElementById("upiInputBox").value;
        // console.log(userUpi);
        let verifyUnable = document.getElementById("upiVerify1");
        let arr = userUpi.split("@");
        if (arr.length == 2 && arr[0].length >= 2 && arr[1].length >= 3) {
            // console.log("yes");
            // console.log(verifyUnable);

            verifyUnable.classList.remove("upiVerifyBtnOff");
            // console.log(verifyUnable);
        } else {
            verifyUnable.classList.add("upiVerifyBtnOff");
        }

    })
}


let checkValidUpi = () => {
    let userUpi = document.getElementById("upiInputBox").value;
    // console.log(userUpi);

    let verifyUnable = document.getElementById("upiVerify1");
    let arr = userUpi.split("@");
    if (arr.length == 2 && arr[0].length >= 2 && arr[1].length >= 3) {
        // console.log("yes");
        // console.log(verifyUnable);

        verifyUnable.classList.remove("upiVerifyBtnOff");
        // console.log(verifyUnable);
    } else {
        verifyUnable.classList.add("upiVerifyBtnOff");
    }


}



let validUpiUsername = ["12345678", "apollo", "masaischool", "12345", "shop", "masai"];
localStorage.setItem("validUpiUsername", JSON.stringify(validUpiUsername));


let verifyUpi = document.getElementById("upiVerifyBtn");
verifyUpi.addEventListener("submit", verify);

function verify() {

    event.preventDefault();
    // console.log("hii");

    let userUpi = document.getElementById("upiInputBox").value;
    let username = "";
    for (let i = 0; i < userUpi.length; i++) {
       
        if (userUpi[i] == "@") break;
        username += userUpi[i];
    }
    localStorage.setItem("upiUsername", username);

    let validUsername = JSON.parse(localStorage.getItem("validUpiUsername"));
    // console.log('validUsername:', validUsername)
    if (!validUsername.includes(username)) {
        document.getElementById("upiNotValid").style.display = "block";
        console.log("Not Valid");
    } else {
        console.log("Processing"); 
        document.getElementById("upiNotValid").style.display = "none";


    }

}




//Card payment
let validCardNum = ["1234 1234 1234 1234","1234 5678 1234 5678","1357 2468 1357 2468"];
localStorage.setItem("validCardNum",JSON.stringify(validCardNum));
localStorage.setItem("validCard","false");
localStorage.setItem("cardMonth","false");
localStorage.setItem("cardYear","false");

let inputFild = document.getElementById("CardNumberBox");
inputFild.onkeydown = function(){
    
    if(inputFild.value.length > 0 && ((inputFild.value.length == 4)||(inputFild.value.length == 9)||(inputFild.value.length == 14))){
        // console.log("huiu")
        inputFild.value += " ";
    }

    let validCard = JSON.parse(localStorage.getItem("validCardNum"));
    if(inputFild.value.length > 18){
        
        if(!validCard.includes(inputFild.value)){
            localStorage.setItem("validCard","false");
            console.log("card Num not valid");
            document.getElementById("invalidCardNum").classList.add("invalidCardNum");
            
        }else{
            console.log("valid card");
            localStorage.setItem("validCard","true");
            document.getElementById("invalidCardNum").classList.remove("invalidCardNum");
        }
    }
};


let userMonth = document.getElementById("validTillMonthBox");
userMonth.onkeydown = function(){
    
    if(userMonth.value.length > 1 && ((userMonth.value[0] < 2)||(userMonth.value[1] < 10))){
        console.log("valid Card month/year");
        document.getElementById("validTillYearBox").classList.remove("validTillYearBox");
        // console.log('classlist:', classlist)
        localStorage.setItem("cardMonth","true");
        document.getElementById("invalidMonthYear").classList.remove("invalidMonthYear");

        
    }else{
        document.getElementById("validTillYearBox").classList.add("validTillYearBox");
        // console.log('ads:', ads)
        console.log("Invalid Card month/year");
        localStorage.setItem("cardMonth","false");
        document.getElementById("invalidMonthYear").classList.add("invalidMonthYear");
    }
};

let userYear = document.getElementById("validTillYearBox");
userYear.onkeydown = function(){
    
    if(userYear.value.length > 1 && ((userYear.value > 21))){
        console.log("valid Card month/year");
        localStorage.setItem("cardYear","true");
        document.getElementById("invalidMonthYear").classList.remove("invalidMonthYear");

        
    }else{
        console.log("Invalid Card month/year");
        localStorage.setItem("cardYear","false")
        document.getElementById("invalidMonthYear").classList.add("invalidMonthYear");

    }
};



let checkCard = document.getElementById("userCcvBox");

checkCard.onkeydown = function(){
    console.log("hello there")
    let cardNum = localStorage.getItem("validCard");
    let expiryMonth = localStorage.getItem("cardMonth");
    let expiryYear = localStorage.getItem("cardYear");
    
    
    if(cardNum == "true" && expiryMonth == "true" && expiryYear == "true"){
        console.log("hey there")
        document.getElementById("cardPayBtnBox").classList.remove("cardPayBtnBoxOff");
    }else{
        document.getElementById("cardPayBtnBox").classList.add("cardPayBtnBoxOff");
    }
};

