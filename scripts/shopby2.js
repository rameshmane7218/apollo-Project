var shopbycategory = [
  {
    url: "https://newassets.apollo247.com/pub/media/catalog/category/baby_care_22oct.png",
    Product_name: "BabyCare",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/catalog/category/health_and_nutrition_22oct.png",
    Product_name: "Health & Nutrition",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/catalog/category/personal_care_22oct.png",
    Product_name: "Personal Care",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg",
    Product_name: "Ayurveda",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/catalog/category/health_devices_22oct.png",
    Product_name: "Health Devices",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/catalog/category/home_essentials_22oct.png",
    Product_name: "Home Essentials",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png",
    Product_name: "Pain Relief",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/o/r/oral_care_2.png",
    Product_name: "Oral Care",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_lungs.png",
    Product_name: "Respiratory",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/cold_and_immunity_21oct.png",
    Product_name: "Cold & Immunity",
  },
];
window.addEventListener("load", function () {
  displayshopby2(shopbycategory);
});

function displayshopby2(shopbycategory) {
  shopbycategory.map(function (el) {
    let cont = document.createElement("div");

    cont.setAttribute("id", "shopbyHC2");

    let box1 = document.createElement("div");

    //  box.setAttribute("id","shopbyHC")
    let img = document.createElement("img");
    img.src = el.url;
    img.style.height = "40px";
    img.style.width = "40px";

    box1.append(img);

    let box2 = document.createElement("div");

    // box2.setAttribute("id","shopbyHC2")

    let ptag = document.createElement("p");
    ptag.innerText = el.Product_name;
    ptag.style.fontSize = "12px";

    box2.append(ptag);

    cont.append(box1, box2);

    document.getElementById("shopby2").append(cont);
  });
}
