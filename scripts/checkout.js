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
    <select  class="qtys" >
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
    Discount_Price.innerText=`${elem.strikedoffprice}`;

    var Saving_Price=document.createElement("p");
    Saving_Price.setAttribute("id","Saving_Price")
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





function removeItem(elem,i){
 console.log(elem,i)
CartData.splice(i,1)
//console.log(CartData)
localStorage.setItem("cart",JSON.stringify(CartData))
//window.location.reload()

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


 

let Add_append=document.getElementById("Address_after_mapping");

var Address_data=JSON.parse(localStorage.getItem("Address_details"));



let city=Address_data.features[0].properties.county;
let country=Address_data.features[0].properties.country;
let pincode=Address_data.features[0].properties.postcode;
let state=Address_data.features[0].properties.state;

Add_append.append(city,"  ",state,"  ",pincode,".  ",country)





 

  
  