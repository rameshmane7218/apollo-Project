// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { countryNews, newsData } from "./fetch.js";

let query = localStorage.getItem("query");
// console.log("local",query);


let appendData = await newsData(query);
console.log('appendData:', appendData)
appendNews(appendData);


// let resultDiv = document.getElementById("results");
function appendNews(data) {
    document.getElementById("results").innerHTML = null;
    data.forEach((el) => {

        let box = document.createElement("div");
        box.setAttribute("class", "news");
        box.addEventListener("click", () => {
            storeData(el);
        })

        let img = document.createElement("img");
        img.src = el.urlToImage;

        let dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "dataDiv")

        let title = document.createElement("h3");
        title.textContent = el.title;

        let description = document.createElement("p");
        description.textContent = el.description;

        dataDiv.append(title, description);

        box.append(img, dataDiv);

        document.getElementById("results").append(box);


    });
}

let storeData = (el) => {
    localStorage.setItem("news", JSON.stringify(el));
    window.location.href = "news.html";
}



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