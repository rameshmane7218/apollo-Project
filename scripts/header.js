localStorage.setItem("login","false");
// localStorage.setItem("login","true");
let loginStatus = localStorage.getItem("login");
// console.log(loginStatus);
let navigation = document.getElementById("navigation");
if(loginStatus == "true"){
    navigation.innerHTML = null;
    navigation.innerHTML = ` 
    <a href="#" title="Appointments">
        Appointments
    </a>
    <a href="#" title="Health Records">
        Health Records
    </a>
    <a href="#" title="Medicines">
        Medicines
    </a>
    <a href="#" title="Lab Tests">
        Lab Tests
    </a>
    <a href="#" title="Covid-19">
        Covid-19
    </a>
    <div id="cartId">
        <div><span class="material-symbols-rounded">
                shopping_cart
            </span></div>
    </div>`
}else{
    navigation.innerHTML = null;
    navigation.innerHTML = ` 
    <a href="#" title="Doctors">
        <span class="tabName">Doctors</span>
        <span class="subTabName">Consult<br> Online</span>
    </a>
    <a href="#" title="Pharmacy">
        <span class="tabName">Pharmacy</span>
        <span class="subTabName">Medicines &<br> other products</span>
    </a>
    <a href="#" title="Tests">
        <span class="tabName">Lab Tests</span>
        <span class="subTabName">Health<br> check-ups</span>
    </a>
    <a href="#" title="Covid-19">
        <span class="tabName">Covid-19</span>
        <span class="subTabName">Latest<br> updates</span>
    </a>
    <div id="cartId">
        <div><span class="material-symbols-rounded">
                shopping_cart
            </span></div>
    </div>`
}


