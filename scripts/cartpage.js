// header part starts here 

import { navbar } from "../components/navbar.js";
document.getElementById("fixedHeader").innerHTML = navbar();

// header part end here 





// append data part

const CartData=JSON.parse(localStorage.getItem("cart"))||[];

var total_money=0;
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
    img.src=elem.image_url;

    
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

    var PriceDiv=document.createElement("div");
    PriceDiv.setAttribute("id","PriceDiv")
    var price=document.createElement("p");
    var off=(elem.price-elem.strikedoffprice)/100;
    var of1=off.toFixed(2);
    // var Rupees_icon=document.createElement("i");
    // Rupees_icon.setAttribute("class","fa-solid fa-indian-rupee-sign");
    price.innerText=`${of1}% off MRP+${elem.price}`;


// ..........................money calculations...............


    
    total_money=total_money+elem.price;
    
    var Delivery_Charges=(total_money/10).toFixed(2);
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
    Discount_Price.innerText=`${elem.strikedoffprice}`;

    var Saving_Price=document.createElement("p");
    Saving_Price.setAttribute("id","Saving_Price")
    Saving_Price.setAttribute("class","Saving_Price")
    Saving_Price.innerText=`Savings ${(elem.price-elem.strikedoffprice).toFixed(2)}`;
    

    
    //TOTAL SAVING CALCULATIONS
    total_saving=total_saving+(elem.price-elem.strikedoffprice);


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


// //method1
// function calculate(elem,i){
//   // how_many=1
//   var how=document.getElementById("qtys").value;
//   console.log(how);
//   Discount_Price.innerText=elem.strikedoffprice*(+how).toFixed(0);

// }
// function change_sesssion(){

    let qty = document.getElementsByClassName("qtys");
    console.log("qty:",qty);
    let Discount_Price = document.getElementsByClassName("Discount_Price");
    console.log("Discount_Price:",Discount_Price);

    for(let i=0; i<qty.length; i++){
        qty[i].onchange = function(){
            let newQty = Number(qty[i].value);
            let newPrice = Number(Discount_Price[i].innerText);

            console.log("update:",newQty*newPrice);
            Discount_Price[i].innerText = newQty*newPrice;
        }
    }
    
    
// }






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
  document.querySelector("#to_pay2").innerText=total_money-(total_money/10).toFixed(2);
}

console.log(total_money);

total_saving=total_saving.toFixed(2)

document.getElementById("total_saving").innerText=`Total Saving:${total_saving}`;

document.getElementById("no_of_items").innerText=`ITEMS IN YOUR CART :${Cartarr.length}`


 

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
    <button id="saved_final_add">SAVE AND USE</button>
    `


}

 

 

  
  