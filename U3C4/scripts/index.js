// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
// console.log(navbar());

import { sidebar } from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar();

import {countryNews} from "../scripts/fetch.js";


async function cSearch() {
    let countryCode;
    // console.log(this.id);

    if (this.id.length != 0) {
        countryCode = this.id;
        // console.log(countryCode)
        let appendData = await countryNews(countryCode);
        // console.log('appendData:', appendData);

        appendNews(appendData);
    }

}

let country = document.getElementById("sidebar").children;
// console.log(country);

for (let el of country) {
    el.addEventListener("click", cSearch);
}

let resultDiv = document.getElementById("results");
let appendNews = (data) => {
    console.log(data);
    resultDiv.innerHTML = null;

    data.forEach((el)=>{

        let box = document.createElement("div");
        box.setAttribute("class","news");
        box.addEventListener("click",()=>{
            storeData(el);
        })

        let img = document.createElement("img");
        img.src = el.urlToImage;

        let dataDiv = document.createElement("div");
        dataDiv.setAttribute("class","dataDiv")

        let title = document.createElement("h3");
        title.textContent = el.title;

        let description = document.createElement("p");
        description.textContent = el.description;

        dataDiv.append(title,description);

        box.append(img,dataDiv);

        resultDiv.append(box);


    }); 
}

let storeData = (el) => {
    localStorage.setItem("news",JSON.stringify(el));
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