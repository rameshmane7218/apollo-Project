// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


let el = JSON.parse(localStorage.getItem("news"))
console.log(el);

let detailed_news = document.getElementById("detailed_news");



// let box = document.createElement("div");
// box.setAttribute("class", "newsDiv");

let img = document.createElement("img");
img.src = el.urlToImage;

let dataDiv = document.createElement("div");
dataDiv.setAttribute("class", "dataDiv")

let title = document.createElement("h3");
title.textContent = el.title;

let description = document.createElement("p");
description.textContent = el.description;

dataDiv.append(title, description);

// box.append(img, dataDiv);

detailed_news.append(img, dataDiv);




// search functionality 
let search = (event)=>{
    if(event.key == "Enter"){
        // console.log("entered");
        let query = document.getElementById("search_input").value;
        // console.log(query);
        localStorage.setItem("query",query);
        window.location.href = "search.html";
        
        
    }
}

document.getElementById("search_input").addEventListener("keydown", search);