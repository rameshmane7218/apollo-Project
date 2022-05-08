// localStorage.setItem("loginnav","false");
// localStorage.setItem("loginnav","true");
let loginStatus = localStorage.getItem("login") || "false";
// console.log(loginStatus);
let navigation;
if(loginStatus == "true"){
    navigation = ` 
    <a href="#" title="Appointments" class="appointments">
        Appointments
    </a>
    <a href="#" title="Health Records" class="health">
        Health Records
    </a>
    <a href="#" title="Medicines" class="medicines">
        Medicines
    </a>
    <a href="#" title="Lab Tests" class="labTest">
        Lab Tests
    </a>
    <a href="#" title="Covid-19" class="covid-19">
        Covid-19
    </a>
    <div id="cartId">
        <div>
            <a href="cart1.html" id="moveCart"> 
                <span class="material-symbols-rounded">
                    shopping_cart
                </span>
            </a>
        </div>
    </div>`
}else{
    navigation = ` 
    <a href="#" title="Doctors" class="doctor">
        <span class="tabName">Doctors</span>
        <span class="subTabName">Consult<br> Online</span>
    </a>
    <a href="#" title="Pharmacy" class="pharmacy">
        <span class="tabName">Pharmacy</span>
        <span class="subTabName">Medicines &<br> other products</span>
    </a>
    <a href="#" title="Tests" class="tests">
        <span class="tabName">Lab Tests</span>
        <span class="subTabName">Health<br> check-ups</span>
    </a>
    <a href="#" title="Covid-19" class="covid-19">
        <span class="tabName">Covid-19</span>
        <span class="subTabName">Latest<br> updates</span>
    </a>
    <div id="cartId">
        <div>
            <a href="cart1.html" id="moveCart"> 
                <span class="material-symbols-rounded">
                    shopping_cart
                </span>
            </a>
        </div>
    </div>`
}


let navbar = () => {
    return ` 
    <div class="headerPart">
        <header class="header">
            <div class="logo">
                <a href="index.html" class="logoImg" title="Home">
                    <img src="https://newassets.apollo247.com/images/ic_logo.png"
                        alt="Online Doctor Consultation & Medicines"
                        title="Online Doctor Consultation & Medicines">
                </a>
            </div>
            <div style="display:none">
                <div class="locationPart">
                    <div id="locationId">
                        <div class="locationContent">
                            <span>
                                <img src="https://newassets.apollo247.com/images/location-icon.svg"
                                    alt="location-img" />
                            </span>
                            No Location
                        </div>
                    </div>
                </div>
            </div>
            <div class="rightNavbar">
                <div class="navigationTab">
                    <div class="navigation" id="navigation">
                    ${navigation}
                    </div>
                    <div class="loginPart">
                        <div class="loginDiv">
                            <div id="loginPopup" class="login login1" title="Login/SignUp">
                                <span class="material-symbols-rounded">
                                    person
                                </span>
                               
                            </div>
                            <div id="bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>`;
};



export {navbar};