var hotsellerdata = [
  {
    imgUrl:
      "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/a/main_31566907052.jpg",
    name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
    strikePrice: "2599",
    price: "1170",
    off: "20% OFF",
    cashback: "41.96 extra cashback",
    circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
  },
  {
    imgUrl:
      "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0017.jpg",
    name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
    strikePrice: "2599",
    price: "1170",
    off: "20% OFF",
    cashback: "41.96 extra cashback",
    circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
  },
  {
    imgUrl:
      "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0115.jpg",
    name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
    strikePrice: "2599",
    price: "1170",
    off: "20% OFF",
    cashback: "41.96 extra cashback",
    circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
  },
  {
    imgUrl:
      "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0100.jpg",
    name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
    strikePrice: "2599",
    price: "1170",
    off: "20% OFF",
    cashback: "41.96 extra cashback",
    circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
  },
  {
    imgUrl:
      "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/a/main_31566907052.jpg",
    name: "Sebamed Baby Sun Care SPF 50+ Multi Protect Sun Lotion, 200 ml",
    strikePrice: "2599",
    price: "1170",
    off: "20% OFF",
    cashback: "41.96 extra cashback",
    circle: "https://newassets.apollo247.com/images/ic_circle_logo.png",
  },
];

window.addEventListener("load", function () {
  displayhotseller(hotsellerdata);
});

function displayhotseller(hotsellerdata) {
  var cartdata = JSON.parse(localStorage.getItem("cart")) || [];
  hotsellerdata.map(function (el) {
    let hotsellercontainer = document.createElement("div");

    hotsellercontainer.setAttribute("id", "product");
    let image = document.createElement("img");
    image.src = el.imgUrl;
    image.style.height = "100px";
    image.style.width = "100px";

    let ptag = document.createElement("p");
    ptag.innerText = el.name;

    let hrtag = document.createElement("hr");

    let strikePrice = document.createElement("s");
    strikePrice.innerText = "MRP " + el.strikePrice;
    strikePrice.style.fontWeight = "bold";

    let price = document.createElement("h4");
    price.innerText = "Rs. " + el.price;

    let cashbackdiv = document.createElement("div");
    cashbackdiv.setAttribute("class", "cashbackdiv");
    let circle = document.createElement("img");
    circle.src = el.circle;
    circle.setAttribute("id", "circleimg");

    let cashback = document.createElement("p");
    cashback.innerText = el.cashback;
    // cashback.style.color = "#0da5e4"

    cashbackdiv.append(circle, cashback);

    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.setAttribute("id", "btn");

    btn.addEventListener("click", function () {
      addtocart(el);
    });

    hotsellercontainer.append(
      image,
      ptag,
      hrtag,
      strikePrice,
      price,
      cashbackdiv,
      btn
    );

    document.getElementById("Hot_seller").append(hotsellercontainer);
  });
  function addtocart(el) {
    cartdata.push(el);
    localStorage.setItem("cart", JSON.stringify(cartdata));
    alert("item added to cart");
  }
}
