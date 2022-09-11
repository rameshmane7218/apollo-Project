var shopby = [
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
    Product_name: "COVID Care",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png",
    Product_name: "COVID Protection",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png",
    Product_name: "Diabetes Care",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg",
    Product_name: "Mind Care",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg",
    Product_name: "Liver Care",
  },
  {
    url: "https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png",
    Product_name: "Cardiac",
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
  displayshopby(shopby);
});

function displayshopby(shopby) {
  shopby.map(function (el) {
    let cont = document.createElement("div");

    cont.setAttribute("id", "shopbyHC");

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

    document.getElementById("shopby").append(cont);
  });
}
