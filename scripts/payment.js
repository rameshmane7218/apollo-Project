let payCollapse = document.getElementsByClassName("paymentAccordion");
let arrow = document.getElementsByClassName("fa-solid fa-angle-up");
console.log('arrow:', arrow)
console.log(payCollapse);

var i;

for (i = 0; i < payCollapse.length; i++) {
    // console.log(payCollapse[i].style.display)
    payCollapse[i].addEventListener("click", function () {
        let content = this.nextElementSibling;
        // console.log(content);
        // let arrow = this.lastElementChild.lastElementChild.lastElementChild.className;
        // let arrow = this.lastElementChild.lastElementChild.lastElementChild.style.color = "green";

        // console.log(i);


        // console.log(this);

        if (content.style.display != "block") {
            content.style.display = "block";

        } else {
            content.style.display = "none";
        }
    })

}
document.getElementsByClassName("payWithNewCard").onclick = function(){
    let content = this.nextElementSibling;
    // console.log("hii");
    
    console.log(content);
}











//Card payment
let validCardNum = ["1234 1234 1234 1234", "1234 5678 1234 5678", "1357 2468 1357 2468"];
localStorage.setItem("validCardNum", JSON.stringify(validCardNum));
localStorage.setItem("validCard", "false");
localStorage.setItem("cardMonth", "false");
localStorage.setItem("cardYear", "false");

let inputFild = document.getElementById("CardNumberBox");
inputFild.onkeydown = function () {

    if (inputFild.value.length > 0 && ((inputFild.value.length == 4) || (inputFild.value.length == 9) || (inputFild.value.length == 14))) {
        // console.log("huiu")
        inputFild.value += " ";
    }

    let validCard = JSON.parse(localStorage.getItem("validCardNum"));
    if (inputFild.value.length > 18) {

        if (!validCard.includes(inputFild.value)) {
            localStorage.setItem("validCard", "false");
            console.log("card Num not valid");
            document.getElementById("invalidCardNum").classList.add("invalidCardNum");

        } else {
            console.log("valid card");
            localStorage.setItem("validCard", "true");
            document.getElementById("invalidCardNum").classList.remove("invalidCardNum");
        }
    }
};


let userMonth = document.getElementById("validTillMonthBox");
userMonth.onkeydown = function () {

    if (userMonth.value.length > 1 && ((userMonth.value[0] < 2) || (userMonth.value[1] < 10))) {
        console.log("valid Card month/year");
        document.getElementById("validTillYearBox").classList.remove("validTillYearBox");
        // console.log('classlist:', classlist)
        localStorage.setItem("cardMonth", "true");
        document.getElementById("invalidMonthYear").classList.remove("invalidMonthYear");


    } else {
        document.getElementById("validTillYearBox").classList.add("validTillYearBox");
        // console.log('ads:', ads)
        console.log("Invalid Card month/year");
        localStorage.setItem("cardMonth", "false");
        document.getElementById("invalidMonthYear").classList.add("invalidMonthYear");
    }
};

let userYear = document.getElementById("validTillYearBox");
userYear.onkeydown = function () {

    if (userYear.value.length > 1 && ((userYear.value > 21))) {
        console.log("valid Card month/year");
        localStorage.setItem("cardYear", "true");
        document.getElementById("invalidMonthYear").classList.remove("invalidMonthYear");


    } else {
        console.log("Invalid Card month/year");
        localStorage.setItem("cardYear", "false")
        document.getElementById("invalidMonthYear").classList.add("invalidMonthYear");

    }
};



let checkCard = document.getElementById("userCcvBox");

checkCard.onkeydown = function () {
    // console.log("hello there")
    let cardNum = localStorage.getItem("validCard");
    let expiryMonth = localStorage.getItem("cardMonth");
    let expiryYear = localStorage.getItem("cardYear");


    if (cardNum == "true" && expiryMonth == "true" && expiryYear == "true") {
        // console.log("hey there")
        document.getElementById("cardPayBtnBox").classList.remove("cardPayBtnBoxOff");
        
    } else {
        document.getElementById("cardPayBtnBox").classList.add("cardPayBtnBoxOff");
    }
};

// open opt page 
document.getElementById("cardData").addEventListener("submit",function(){
    event.preventDefault();
    console.log("Hii");
    setTimeout(function(){
        // window.location.href = "loadingBankPage.html";
        window.close();
        window.open("loadingBankPage.html" , "width=500px, height=400px");
    },2000);
   
    
})






//upi payment process %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

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
        openModalDiv();
    }
}
function openModalDiv() {
    window.location.href = '#openUpiModal';
    startUPITimer();
}




// onclick cancel payment 
document.getElementById("cancel-payment").onclick = function () {

    window.location.href = "#";
    document.getElementById("base-timer__svg").style.opacity = "0";
    window.location.reload();
}

// Timer countdown
function startUPITimer() {

    localStorage.removeItem("paymentStatus");

    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;

    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };

    const TIME_LIMIT = 10;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;

    document.getElementById("app").innerHTML = `
    <div class="base-timer">
        <svg class="base-timer__svg" id="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
            ></path>
            </g>
        </svg> 
                <span id="base-timer-label" class="base-timer__label">${formatTime(
                timeLeft
            )} 
            </span>
            <span class="min-text">mins</span>

        
    </div>`;

    startTimer();

    function onTimesUp() {
        clearInterval(timerInterval);
        setTimeout(function () {
            document.getElementById("base-timer__svg").style.opacity = "0";
            window.location.href = "#";
            // window.location.reload();
        }, 1000)


    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            // console.log("timePassed:",timePassed);

            let paymentStatus = localStorage.getItem("paymentStatus");

            if (paymentStatus == "true") {
                console.log("Payment Successfull");
                
                document.getElementById("base-timer__svg").style.opacity = "0";
                clearInterval(timerInterval);

                document.getElementById("paymentContainer").classList.add("hidePaymentContainer");
                window.location.href = "#ProcessingModal";

                setTimeout(function(){
                    window.location.href = "orderSuccess.html";
                },2000);
                
                // window.location.reload();
            } else if (paymentStatus == "false") {
                console.log("Payment declined by user");
                document.getElementById("base-timer__svg").style.opacity = "0";
                clearInterval(timerInterval);
                document.getElementById("paymentContainer").classList.add("hidePaymentContainer");
                window.location.href = "#ProcessingModal";
                setTimeout(function(){
                    window.location.href = "orderDecline.html";
                },2000);

                // window.location.reload();

            }

            if (timePassed === 3) {
                window.open("responsePage.html", "", "width=300, height=400")
            }
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
            setCircleDasharray();
            setRemainingPathColor(timeLeft);

            if (timeLeft === 0) {
                onTimesUp();
            }
        }, 1000);
    }









    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(info.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
        }
    }

    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
    }



}