let data=[];
let cardContainer=document.getElementById("card-container")
document.addEventListener("DOMContentLoaded",function(event){
    fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((res)=>res.json())
    .then((res)=>{
        data=res;
        console.log(res)
        for(let i=0;i<data.length;i++){
            cardContainer.innerHTML+=`<div class="card">
            <div class="image">
            <image class="img" src=${data[i].image}>
            </div>
        
        <div class="details">
            <div class="row">
                <span>${data[i].name}</span>
                <span>${data[i].current_price}</span>
            </div>
        <div class="row">
            <span>${data[i].symbol}</span>
            <span>${data[i].symbol}</span>
        </div>
    </div>
    </div>`;
        }
    })
})