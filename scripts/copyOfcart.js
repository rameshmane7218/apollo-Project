
/*
// Old Code 

// append data part

const CartData=JSON.parse(localStorage.getItem("cart"))||[];
console.log("CartData:",CartData);
var total_money=0;
var Delivery_Charges;
var total_saving=0;
var Cartarr=[];
//let  Big_box=document.getElementById("display_added_items").innerHTML=null;
 console.log(CartData);


CartData.map(function(elem,i){
  
   Cartarr.push(elem);
   // document.querySelector("p").innerText=`your selected ${cartData.length} item and total is Rs ${total}`
    var box=document.createElement("div");
    box.setAttribute("id","box");

    // <..........................left_box...............>

    var box_left=document.createElement("div");
    box_left.setAttribute("id","box_left");

    var img=document.createElement("img");
    img.setAttribute("id","cart_product_img")
    img.src=elem.imgUrl;

    
    var box_left_extra=document.createElement("div");
    box_left_extra.setAttribute("id","box_left_extra");

    var name=document.createElement("p");
    name.setAttribute("id","name_of_product");
    name.innerText=elem.name;

    var quentity=document.createElement("p");
    quentity.innerText="(pack of 1)"
    quentity.setAttribute("id","pack_of");

    let options=document.createElement("p");
    options.setAttribute("id","options");
    options.innerHTML = `<label for="" id="lable">QTY: </label>
    <select   id="qtys" class="qtys" >
        <option value="1" id="one"  >1</option>
        <option value="2"  >2</option>
        <option value="3"  >3</option>
        <option value="4"  >4</option>
        <option value="5"  >5</option>
        <option value="6"  >6</option>
        <option value="7"  >7</option>
        <option value="8"  >8</option>
        <option value="9"  >9</option>
        <option value="10"  >10</option>
    </select>`
  
    
     // <..........................right_box...............>
    

    var box__right=document.createElement("div");
    box__right.setAttribute("id","box__right");

    var btn =document.createElement("i");
    btn.setAttribute("class","fa-solid fa-trash-can");
  
    btn.addEventListener("click",function(){
        removeItem(elem,i)
    });

     //CHANGING STRING TO Number

    var PriceDiv=document.createElement("div");
    PriceDiv.setAttribute("id","PriceDiv")
    var price=document.createElement("p");
    var off=(Number(elem.price)-Number(elem.strikePrice))/100;
    var of1=off.toFixed(2);
    // var Rupees_icon=document.createElement("i");
    // Rupees_icon.setAttribute("class","fa-solid fa-indian-rupee-sign");
    price.innerText=`${of1}% off MRP+${Number(elem.price)}`;


// ..........................money calculations...............


    
    total_money=total_money+Number(elem.strikePrice);
    
     Delivery_Charges=(total_money/10).toFixed(2);
    if(Delivery_Charges>200)
    {
        document.getElementById("Delivery_Charges").innerText="FREE";
    }
    else{
        document.getElementById("Delivery_Charges").innerText=Delivery_Charges;
    }

    var Discount_Price=document.createElement("p");
    Discount_Price.setAttribute("id","Discount_Price");
    Discount_Price.setAttribute("class","Discount_Price");
    Discount_Price.innerText=`${Number(elem.strikePrice)}`;

    var Saving_Price=document.createElement("p");
    Saving_Price.setAttribute("id","Saving_Price")
    Saving_Price.setAttribute("class","Saving_Price")
    Saving_Price.innerText=(Number(elem.price)-Number(elem.strikePrice)).toFixed(2);
    

    
    //TOTAL SAVING CALCULATIONS
    total_saving=total_saving+(Number(elem.price)-Number(elem.strikePrice));


   //Appending part
    box_left_extra.append(name,quentity,options)
     box_left.append(img,box_left_extra);
     box.append(box_left);
     document.querySelector("#display_added_items").append(box);

     PriceDiv.append(price,Discount_Price,Saving_Price);
     box__right.append(btn,PriceDiv)
    box.append(box__right)
    document.querySelector("#display_added_items").append(box);
});



///work after increasing quentites.............................................................
    let qty = document.getElementsByClassName("qtys");
    console.log("qty:",qty);
    let Discount_Price = document.getElementsByClassName("Discount_Price");
    console.log("Discount_Price:",Discount_Price);
    let Saving_Price = document.getElementsByClassName("Saving_Price");
    console.log("Saving_Price:",Saving_Price);

    for(let i=0; i<qty.length; i++){
        qty[i].onchange = function(){
            let newQty = Number(qty[i].value);
            let newPrice = Number(Discount_Price[i].innerText);
            let newSaving=Number(Saving_Price[i].innerText)

            console.log("update:",newQty*newPrice);
            console.log("updated_saving:",newQty*newSaving)
            Discount_Price[i].innerText = (newQty*newPrice).toFixed(2);
            Saving_Price[i].innerText = (newQty*newSaving).toFixed(2);

           let previous_total_saving=total_saving;
           let new_total_saving=Number(previous_total_saving)+Number((newQty*newSaving).toFixed(2));

           let previous_total_money=total_money;
           let new_total_money=Number(previous_total_money)+Number(((newQty-1)*newPrice).toFixed(2))
           //console.log("new",previous_total_saving,new_total_saving)
            
            //document.getElementById("Saving_Price").innerText=Saving_Price[i].innerText=
            document.getElementById("total_saving").innerText=`Total Saving:${(new_total_saving.toFixed(2))}`;
            document.querySelector("#to_pay1").innerText=new_total_money.toFixed(2);

            //updated delivery charges
             Delivery_Charges=(new_total_money/10).toFixed(2);
             console.log("Delivery_Charges",Delivery_Charges)
            if(Delivery_Charges>200)
            {
                document.getElementById("Delivery_Charges").innerText="FREE";
            }
            else{
                document.getElementById("Delivery_Charges").innerText=Delivery_Charges;
            }
            var Total_money_after=(new_total_money-(new_total_money/10)).toFixed(2);
              document.querySelector("#to_pay2").innerText=(new_total_money-(new_total_money/10)).toFixed(2)
           
            //updated local storage
           //storing all details in local storage
           localStorage.setItem("Total_Saving",JSON.stringify(new_total_saving));
           localStorage.setItem("Total_money_before",JSON.stringify(new_total_money.toFixed(2)))
           localStorage.setItem("Delivery_Charges",JSON.stringify(Delivery_Charges))
           localStorage.setItem("Total_money_after",JSON.stringify(Total_money_after) )

        
           
            }

          

              
    }
 
function removeItem(elem,i){
 console.log(elem,i)
CartData.splice(i,1)
//console.log(CartData)
localStorage.setItem("cart",JSON.stringify(CartData))
window.location.reload()

}
document.querySelector("#to_pay1").innerText=total_money;
if(Delivery_Charges==="FREE")
{
  document.querySelector("#to_pay2").innerText=total_money;
}
else{
  document.querySelector("#to_pay2").innerText=(total_money-(total_money/10)).toFixed(2);
}

console.log(total_money);

total_saving=total_saving.toFixed(2)

document.getElementById("total_saving").innerText=`Total Saving:${total_saving}`;

document.getElementById("no_of_items").innerText=`ITEMS IN YOUR CART :${Cartarr.length}`



//storing all details in local storage
 localStorage.setItem("Total_Saving",JSON.stringify(total_saving));
 localStorage.setItem("Total_money_before",JSON.stringify(total_money))
 localStorage.setItem("Delivery_Charges",JSON.stringify(Delivery_Charges))
 localStorage.setItem("Total_money_after",JSON.stringify(document.querySelector("#to_pay2").innerText))





// map work .............................................................

function getDataLocation(lat,lon){
    //let city = document.getElementById("city").value ;
    
    //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=870a4d4e2d4f5b6fe6e4950b5c562ca5`;

    const url1=`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=6b84dcc2fc3441b19d2cb5a22499c07e`;
    fetch(url1)
        .then(function(res){
            return res.json();
        })
        .then(function (res){
            console.log(res)
            console.log(res.features[0].properties.county)
            append(res);
        })
        .catch(function(err){
            console.log("err:",err)
        });
}

function append(data){
    //console.log(data)
    let Map_container = document.getElementById("Map_container");
    let Add_container=document.getElementById("mapped_address");
    let map = document.getElementById("gmap_canvas");
    Map_container.innerHTML=null;

    let city = document.createElement("p");
    city.innerText=`City:${data.features[0].properties.county}`;
    city.setAttribute("id","map_city");

    let country=data.features[0].properties.country;
    let pincode=data.features[0].properties.postcode
    let state=data.features[0].properties.state
   

    localStorage.setItem("Address_details",JSON.stringify(data));

  
   // Map_container.append(city);
    Add_container.append(city,state,",",pincode,",",country);
    
    map.src = `https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed`

}

 function getlocation() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(position) {
      let crd = position.coords;
  
    //   console.log("Your current position is:");
    //   console.log(`Latitude : ${crd.latitude}`);
    //   console.log(`Longitude: ${crd.longitude}`);
    //   console.log(`More or less ${crd.accuracy} meters.`);
  
      getDataLocation(crd.latitude, crd.longitude);
    }
  }
  getlocation();



// ADD PAGE WORK
document.querySelector("#submit_address").addEventListener("click",myfunction)

function myfunction(){
    var address_form_div=document.querySelector("#modal-content");

    // var Add_title=document.createElement("h4").innerText="ADDRESS DETAILS";
    //  Add_title.setAttribute("id","Add_title");

    //  var Add_form=document.c

    address_form_div.innerHTML=`
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="map_btn2"></button>
    <h4 id="add_title">ADDRESS DETAILS</h4>
    <div id="add_0">
    <div id="add_11">
      <p>*House no | Apartment name</p>
      <input id="add_house" type="text" placeholder="*House no | Apartment name">
    </div>
    <div id="add_12">
      <p>*Area Details</p>
      <input id="add_area" type="text" placeholder="*Area Details ">
    </div>
    <div id="add_13">
      <p>*Pincode</p>
      <input id="add_pincode" type="text" placeholder="*Pincode ">
      <input id="add_city" type="text" placeholder="*City ">
    </div>
    <div id="add_14">
      <p>State</p>
      <input id="add_state" type="text" placeholder="State ">
    </div>
    <div id="add_15">
      <p>*Choose nick name for the address</p>
      <button class="add_btn" >Home</button>
      <button class="add_btn">Office</button>
      <button class="add_btn">Other</button>
    </div>
    </div>
    
    <div id="add_2">
      <p class="add_bottom">*BILL TO</p>
      <input id="add_bill" type="text" placeholder="Name ">
    </div>
    <div id="add_3">
      <p class="add_bottom">*MOBILE NUMBER</p>
      <input id="add_mobile" type="text" placeholder="MOBILE NO. ">
    </div>
    <button id="saved_final_add"><a href="checkout.html">SAVE AND USE<a></button>
    `
}


// var address_type=document.getElementsByClassName("add_btn");
// address_type.addEventListener("click",changeColor);

// function changeColor(){
//   document.getElementsByClassName("add_btn").style.color="#00b38e" ;
// }
 

*/



// New Code 





// append data part

const CartData = JSON.parse(localStorage.getItem("cart")) || [];

var total_money = 0;
var Delivery_Charges;
var total_saving = 0;
var Cartarr = [];
let new_total_money = 0;
//let  Big_box=document.getElementById("display_added_items").innerHTML=null;
console.log(CartData);


CartData.map(function (elem, i) {

  Cartarr.push(elem);
  // document.querySelector("p").innerText=`your selected ${cartData.length} item and total is Rs ${total}`
  var box = document.createElement("div");
  box.setAttribute("id", "box");

  // <..........................left_box...............>

  var box_left = document.createElement("div");
  box_left.setAttribute("id", "box_left");

  var img = document.createElement("img");
  img.setAttribute("id", "cart_product_img")
  img.src = elem.imgUrl;


  var box_left_extra = document.createElement("div");
  box_left_extra.setAttribute("id", "box_left_extra");

  var name = document.createElement("p");
  name.setAttribute("id", "name_of_product");
  name.innerText = elem.name;

  var quentity = document.createElement("p");
  quentity.innerText = "(pack of 1)"
  quentity.setAttribute("id", "pack_of");

  let options = document.createElement("p");
  options.setAttribute("id", "options");
  options.innerHTML = `<label for="" id="lable">QTY: </label>
    <select   id="qtys" class="qtys" >
        <option value="1" id="one"  >1</option>
        <option value="2"  >2</option>
        <option value="3"  >3</option>
        <option value="4"  >4</option>
        <option value="5"  >5</option>
        <option value="6"  >6</option>
        <option value="7"  >7</option>
        <option value="8"  >8</option>
        <option value="9"  >9</option>
        <option value="10"  >10</option>
    </select>`


  // <..........................right_box...............>


  var box__right = document.createElement("div");
  box__right.setAttribute("id", "box__right");

  var btn = document.createElement("i");
  btn.setAttribute("class", "fa-solid fa-trash-can");

  btn.addEventListener("click", function () {
    removeItem(elem, i)
  });

  //CHANGING STRING TO Number

  var PriceDiv = document.createElement("div");
  PriceDiv.setAttribute("id", "PriceDiv")
  var price = document.createElement("p");
  var off = (Number(elem.price) - Number(elem.strikePrice)) / 100;
  var of1 = off.toFixed(2);
  // var Rupees_icon=document.createElement("i");
  // Rupees_icon.setAttribute("class","fa-solid fa-indian-rupee-sign");
  price.innerText = `${of1}% off MRP+${Number(elem.price)}`;


  // ..........................money calculations...............



  total_money = total_money + Number(elem.strikePrice);

  Delivery_Charges = (total_money / 10).toFixed(2);
  if (Delivery_Charges > 200) {
    document.getElementById("Delivery_Charges").innerText = "FREE";
  }
  else {
    document.getElementById("Delivery_Charges").innerText = Delivery_Charges;
  }

  var Discount_Price = document.createElement("p");
  Discount_Price.setAttribute("id", "Discount_Price");
  Discount_Price.setAttribute("class", "Discount_Price");
  Discount_Price.innerText = `${Number(elem.strikePrice)}`;

  var Saving_Price = document.createElement("p");
  Saving_Price.setAttribute("id", "Saving_Price")
  Saving_Price.setAttribute("class", "Saving_Price")
  Saving_Price.innerText = (Number(elem.price) - Number(elem.strikePrice)).toFixed(2);



  //TOTAL SAVING CALCULATIONS
  if(elem.strikePrice.trim() == ""){
      total_saving = total_saving + 0;
  }else{
    total_saving = total_saving + (Number(elem.price) - Number(elem.strikePrice));
  }


  //Appending part
  box_left_extra.append(name, quentity, options)
  box_left.append(img, box_left_extra);
  box.append(box_left);
  document.querySelector("#display_added_items").append(box);

  PriceDiv.append(price, Discount_Price, Saving_Price);
  box__right.append(btn, PriceDiv)
  box.append(box__right)
  document.querySelector("#display_added_items").append(box);
});



///work after increasing quentites.............................................................

let qty = document.getElementsByClassName("qtys");
console.log("qty:", qty);
let Discount_Price = document.getElementsByClassName("Discount_Price");
console.log("Discount_Price:", Discount_Price);
let Saving_Price = document.getElementsByClassName("Saving_Price");
console.log("Saving_Price:", Saving_Price);

for (let i = 0; i < qty.length; i++) {
  qty[i].onchange = function () {
    let newQty = Number(qty[i].value);
    let newPrice = Number(Discount_Price[i].innerText);
    let newSaving = Number(Saving_Price[i].innerText)

    console.log("update:", newQty * newPrice);
    console.log("updated_saving:", newQty * newSaving)
    Discount_Price[i].innerText = (newQty * newPrice).toFixed(2);
    Saving_Price[i].innerText = (newQty * newSaving).toFixed(2);

    let previous_total_saving = total_saving;
    let new_total_saving = Number(previous_total_saving) + Number((newQty * newSaving).toFixed(2));

    let previous_total_money = total_money;

    // new_total_money += Number(previous_total_money) + Number(((newQty - 1) * newPrice).toFixed(2))

    let new_total_money = Number(previous_total_money) + Number(((newQty - 1) * newPrice).toFixed(2))

    //console.log("new",previous_total_saving,new_total_saving)

    //document.getElementById("Saving_Price").innerText=Saving_Price[i].innerText=
    document.getElementById("total_saving").innerText = `Total Saving: ${(new_total_saving.toFixed(2))}`;
    document.querySelector("#to_pay1").innerText = new_total_money.toFixed(2);

    //updated delivery charges
    Delivery_Charges = (new_total_money / 10).toFixed(2);
    console.log("Delivery_Charges", Delivery_Charges)
    if (Delivery_Charges > 200) {
      document.getElementById("Delivery_Charges").innerText = "FREE";
    }
    else {
      document.getElementById("Delivery_Charges").innerText = Delivery_Charges;
    }
    var Total_money_after = (new_total_money - (new_total_money / 10)).toFixed(2);


    document.querySelector("#to_pay2").innerText = (new_total_money - (new_total_money / 10)).toFixed(2)


    //updated local storage
    //storing all details in local storage
    localStorage.setItem("Total_Saving", JSON.stringify(new_total_saving));
    localStorage.setItem("Total_money_before", JSON.stringify(new_total_money.toFixed(2)))
    localStorage.setItem("Delivery_Charges", JSON.stringify(Delivery_Charges))
    localStorage.setItem("Total_money_after", JSON.stringify(Total_money_after))



  }




}

function removeItem(elem, i) {
  console.log(elem, i)
  CartData.splice(i, 1)
  //console.log(CartData)
  localStorage.setItem("cart", JSON.stringify(CartData))
  window.location.reload()

}
document.querySelector("#to_pay1").innerText = total_money;
if (document.getElementById("Delivery_Charges").innerText === "FREE") {
  document.querySelector("#to_pay2").innerText = total_money;
  console.log(total_money, "no")
}

else {
  document.querySelector("#to_pay2").innerText = (total_money + (total_money / 10)).toFixed(2);
}


//console.log(total_money);

total_saving = total_saving.toFixed(2)

document.getElementById("total_saving").innerText = `Total Saving: ${total_saving}`;

document.getElementById("no_of_items").innerText = `ITEMS IN YOUR CART :${Cartarr.length}`



//storing all details in local storage
localStorage.setItem("Total_Saving", JSON.stringify(total_saving));
localStorage.setItem("Total_money_before", JSON.stringify(total_money))
localStorage.setItem("Delivery_Charges", JSON.stringify(Delivery_Charges))
localStorage.setItem("Total_money_after", JSON.stringify(document.querySelector("#to_pay2").innerText))





// map work .............................................................

function getDataLocation(lat, lon) {
  //let city = document.getElementById("city").value ;

  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=870a4d4e2d4f5b6fe6e4950b5c562ca5`;

  const url1 = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=6b84dcc2fc3441b19d2cb5a22499c07e`;
  fetch(url1)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res)
      console.log(res.features[0].properties.county)
      append(res);
    })
    .catch(function (err) {
      console.log("err:", err)
    });
}

function append(data) {
  //console.log(data)
  let Map_container = document.getElementById("Map_container");
  let Add_container = document.getElementById("mapped_address");
  let map = document.getElementById("gmap_canvas");
  Map_container.innerHTML = null;

  let city = document.createElement("p");
  city.innerText = `City:${data.features[0].properties.county}`;
  city.setAttribute("id", "map_city");

  let country = data.features[0].properties.country;
  let pincode = data.features[0].properties.postcode
  let state = data.features[0].properties.state


  localStorage.setItem("Address_details", JSON.stringify(data));


  // Map_container.append(city);
  Add_container.append(city, state, ",", pincode, ",", country);

  map.src = `https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed`

}

function getlocation() {
  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
    let crd = position.coords;

    //   console.log("Your current position is:");
    //   console.log(`Latitude : ${crd.latitude}`);
    //   console.log(`Longitude: ${crd.longitude}`);
    //   console.log(`More or less ${crd.accuracy} meters.`);

    getDataLocation(crd.latitude, crd.longitude);
  }
}
getlocation();



// ADD PAGE WORK
document.querySelector("#submit_address").addEventListener("click", myfunction)

function myfunction() {
  var address_form_div = document.querySelector("#modal-content");

  // var Add_title=document.createElement("h4").innerText="ADDRESS DETAILS";
  //  Add_title.setAttribute("id","Add_title");

  //  var Add_form=document.c

  address_form_div.innerHTML = `
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="map_btn2"></button>
    <h4 id="add_title">ADDRESS DETAILS</h4>
    <div id="add_0">
    <div id="add_11">
      <p>*House no | Apartment name</p>
      <input id="add_house" type="text" placeholder="*House no | Apartment name">
    </div>
    <div id="add_12">
      <p>*Area Details</p>
      <input id="add_area" type="text" placeholder="*Area Details ">
    </div>
    <div id="add_13">
      <p>*Pincode</p>
      <input id="add_pincode" type="text" placeholder="*Pincode ">
      <input id="add_city" type="text" placeholder="*City ">
    </div>
    <div id="add_14">
      <p>State</p>
      <input id="add_state" type="text" placeholder="State ">
    </div>
    <div id="add_15">
      <p>*Choose nick name for the address</p>
      <button class="add_btn" >Home</button>
      <button class="add_btn">Office</button>
      <button class="add_btn">Other</button>
    </div>
    </div>
    
    <div id="add_2">
      <p class="add_bottom">*BILL TO</p>
      <input id="add_bill" type="text" placeholder="Name ">
    </div>
    <div id="add_3">
      <p class="add_bottom">*MOBILE NUMBER</p>
      <input id="add_mobile" type="text" placeholder="MOBILE NO. ">
    </div>
    <button id="saved_final_add"><a href="checkout.html">SAVE AND USE<a></button>
    `
}


// var address_type=document.getElementsByClassName("add_btn");
// address_type.addEventListener("click",changeColor);

// function changeColor(){
//   document.getElementsByClassName("add_btn").style.color="#00b38e" ;
// }

let prodData = JSON.parse(localStorage.getItem("cart"));
console.log('prodData:', prodData)

let disCountPrice = prodData[0].price;
console.log('disCountPrice:', disCountPrice)
let strike = prodData[0].strikePrice;
console.log('strike:', strike);
let saving = 0;
if(prodData[1].strikePrice.trim() == ""){
  saving = saving + 0;

}else{

  saving = saving +( Number(prodData[1].price - prodData[1].strikePrice))
}
console.log('saving:', saving)