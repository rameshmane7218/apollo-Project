var hotsellerdata = [

    {
        image_url:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/a/main_31566907052.jpg",
        Product_name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP: "(Rs 2599)",
        Rs: 1170,
        off: "20% OFF",
      },
      {
        image_url:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0017.jpg",
        Product_name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP:"(Rs 2599)",
        Rs: 1170,
        off: "20% OFF",
      },
      {
        image_url:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0115.jpg",
        Product_name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP:"(Rs 2599)",
        Rs: 1170,
        off: "20% OFF",
      },
      {
        image_url:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0100.jpg",
        Product_name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP:"(Rs 2599)",
        Rs: 1170,
        off: "20% OFF",
      },
      {
        image_url:
        "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/a/main_31566907052.jpg",
        Product_name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
        MRP:"(Rs. 2599)",
        Rs: 1170,
        off: "20% OFF",
      },
     
    ]
  
    window.addEventListener("load",function(){
        displayhotseller(hotsellerdata)
    })
  
  
    function displayhotseller(hotsellerdata)
    {
  
      var cartdata = JSON.parse(localStorage.getItem("cart"))||[]
      hotsellerdata.map(function(el){
  
          let hotsellercontainer = document.createElement("div");
  
          hotsellercontainer.setAttribute("id","product")
          let image = document.createElement("img")
          image.src = el.image_url;
          image.style.height= "100px";
          image.style.width = "100px"
  
          let ptag = document.createElement("p")
          ptag.innerText = el.Product_name;
          ptag.style.fontSize = "14px"
  
          let hrtag = document.createElement("hr")
  
  
          let MRP = document.createElement("s")
          MRP.innerText = "MRP "+ el.MRP;
          MRP.style.fontWeight = "bold"
  
          let Rs = document.createElement("h4")
          Rs.innerText = "Rs. " +el.Rs;
  
          let btn = document.createElement("button")
          btn.innerText = "ADD TO CART"
          btn.setAttribute("id","btn")
  
          btn.addEventListener("click",function(){
              addtocart(el)
          })
  
          hotsellercontainer.append(image,ptag,hrtag,MRP,Rs,btn)
  
          document.getElementById("Hot_seller").append(hotsellercontainer)
  
      
      })
      function addtocart(el)
      {
        cartdata.push(el)
        localStorage.setItem("cart",JSON.stringify(cartdata))
        alert("item added to cart")
      }

    }