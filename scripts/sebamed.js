var productsdata = [

    {
        imgUrl:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/a/main_31566907052.jpg",
        name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP: "(Rs. 2599)",
        price: 1170,
        off: "20% OFF",
        cashback: "41.96 extra cashback",
        circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
      },
      {
        imgUrl:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0017.jpg",
        name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP:"(Rs. 2599)",
        price: 1170,
        off: "20% OFF",
        cashback: "41.96 extra cashback",
        circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
      },
      {
        imgUrl:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0115.jpg",
        name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP:"(Rs. 2599)",
        price: 1170,
        off: "20% OFF",
        cashback: "41.96 extra cashback",
        circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
      },
      {
        imgUrl:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0100.jpg",
        name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP:"(Rs. 2599)",
        price: 1170,
        off: "20% OFF",
        cashback: "41.96 extra cashback",
        circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
      },
      {
        imgUrl:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/a/main_31566907052.jpg",
        name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP:"(Rs. 2599)",
        price: 1170,
        off: "20% OFF",
        cashback: "41.96 extra cashback",
        circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
      },
     
   
    ]
  
    window.addEventListener("load",function(){
        display(productsdata)
    })
  
  
    function display(productsdata)
    {
  
      var cartdata = JSON.parse(localStorage.getItem("cart"))||[]
      productsdata.map(function(el){
  
          let container = document.createElement("div");
  
          container.setAttribute("id","product")
          
          let image = document.createElement("img")
          image.src = el.imgUrl;
          image.style.height= "100px";
          image.style.width = "100px"
  
          let ptag = document.createElement("p")
          ptag.innerText = el.name;
         
  
          let hrtag = document.createElement("hr")
  
  
          let MRP = document.createElement("s")
          MRP.innerText = "MRP "+ el.MRP;
          MRP.style.fontWeight = "bold"
  
          let price = document.createElement("h4")
          price.innerText = "Rs. " +el.price;
  
          
          let cashbackdiv = document.createElement("div")
              cashbackdiv.setAttribute("class","cashbackdiv")
          let circle = document.createElement("img")
          circle.src = el.circle
          circle.setAttribute("id","circleimg")

          let cashback = document.createElement("p")
          cashback.innerText = el.cashback
          
          cashbackdiv.append(circle,cashback)
          
          let btn = document.createElement("button")
          btn.innerText = "ADD TO CART"
          btn.setAttribute("id","btn")
  
          btn.addEventListener("click",function(){
              addtocart(el)
          })
  
          container.append(image,ptag,hrtag,MRP,price,cashbackdiv,btn)
  
          document.getElementById("innerproductsdiv").append(container)
  
      
      })
      function addtocart(el)
      {
        cartdata.push(el)
        localStorage.setItem("cart",JSON.stringify(cartdata))
        alert("item added to cart")
      }
    }