let faqDetails = [
    {
        title:"How to order medicines online from Apollo Pharmacy?",
        content:"Ordering medicines from Apollo Pharmacy online medical store is quick and hassle-free. If you wish to purchase over-the-counter medicines or FMCG products, all you need to do is click on the ‘Buy Medicines’ section on the app/website and type the name of the product you wish to buy in the search box. Once you select the product, you can click on the ‘Add to Cart’ button and proceed to make the payment. Once your order has been confirmed, we will start prepping your order for home delivery. Buying prescribed medicines on Apollo Pharmacy is even easier. You just need to upload your prescription using the ‘Upload Button’. Once you do that, our team will get in touch with you to confirm your order.",
    },
    {
        title:"Can I buy all kinds of medicine and health products online on Apollo Pharmacy?",
        content:"Yes, besides the medicines prescribed by your doctor, you can buy a range of medical products on Apollo Pharmacy. This includes over-the-counter (OTC) medicines, FMCG products (including wellness products and baby care products), medical devices (such as pulse oximeter, digital thermometer, blood pressure monitor), masks (N95, face shields), and home essentials (disinfectants, sanitizers, etc.).",
    },
    {
        title:"Is online medicine delivery safe?",
        content:"Absolutely! All the medicines/products sold through our platform are inspected thoroughly for their authenticity and quality. Also, while delivering the medicines, our team follows strict safety protocols to ensure only the top-notch products get delivered to you.",
    },
    {
        title:"How can I buy prescribed medicines online through Apollo Pharmacy?",
        content:"To buy prescribed medicines through Apollo Pharmacy, all you need to do is upload your prescription on the app/website using the ‘Upload’ button. Once your prescription is uploaded, our team will get in touch with you to confirm your order. And once your order is confirmed, your order will be dispatched at the earliest.",
    },
    {
        title:"How do I know if there is a delay in delivery?",
        content:"If, for any reason, your order is delayed, our team will contact you either through SMS, call or email and inform you of the same. You can also check the status of your order on the app/website by clicking on the ‘Order Status’ button.",
    },
    {
        title:"Can Apollo Pharmacy provide express delivery?",
        content:"Yes, depending on the city you reside in. In select cities, orders are delivered in as less as 1 hour. Please note that the express deliveries may be based on various other factors such as medicine availability, availability of the staff, etc.",
    },
    {
        title:"How can I buy Apollo Pharmacy products?",
        content:"Besides walking into an Apollo Pharmacy outlet and buying the medicines in person, you can purchase products from Apollo Pharmacy on the Apollo Pharmacy app or website. To do this, you will need to visit the app/website of Apollo Pharmacy and click on the ‘Buy Medicines’ section.",
    },
    {
        title:"Can I track the delivery status of my order? If yes, how?",
        content:"To track your order, you can click on the ‘My Orders’ section under the ‘My Account’ tab. Then click on the particular order to check the status of your order.",
    },
    {
        title:"Does Apollo Pharmacy provide home delivery of medicines?",
        content:"Yes, Apollo Pharmacy provides the fastest home delivery of medicines.",
    },
    {
        title:"Does Apollo Pharmacy provide same day delivery of online medicine order?",
        content:"Yes, Apollo Pharmacy provides same day delivery of online medicine order.",
    },
   
];
let faqContan = document.getElementById("faqContainer")
faqDetails.forEach(({title, content})=>{
    let box = document.createElement("div");
    
    box.setAttribute("class","faqMain");
    box.innerHTML = `<div class="faqTitle">
                        <h2>${title}</h2>
                        <i id="faqArrow" class="fa-solid fa-angle-up"></i>
                    </div>
                    <div class="faqContent">
                        <p>${content}</p>
                    </div>`

              

                    faqContan.append(box);

})
let collapseFaq = document.getElementsByClassName("faqTitle");
// console.log(collapseFaq);
var i;
for(i=0; i<collapseFaq.length; i++){
    collapseFaq[i].addEventListener("click", function(){
        let contentFaqs = this.nextElementSibling;
        // console.log(contentFaqs);
 let arrFaqs = this.lastElementChild;
        // console.log(arrFaqs);
 
        if(contentFaqs.style.display == "block"){
            contentFaqs.style.display = "none";
  arrFaqs.classList.remove("fa-angle-down");
            arrFaqs.classList.add("fa-angle-up");
            
        }else{
            contentFaqs.style.display = "block";
           arrFaqs.classList.remove("fa-angle-up");
            arrFaqs.classList.add("fa-angle-down");
        }
        
    })
}