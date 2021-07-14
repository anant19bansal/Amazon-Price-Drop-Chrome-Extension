console.log("content script is loaded");

let products = document.querySelectorAll('#g-items li');
let aTags = document.querySelectorAll('h3 .a-link-normal');
let items = [];
for(let i = 0; i<products.length; i++){
    let item = {};
    item.price = parseFloat(products[i].getAttribute('data-price'));
    item.name = products[i].innerText.split('\n')[0];
    item.itemId = products[i].getAttribute('data-itemid');
    item.link = "amazon.in"+aTags[i].getAttribute('href');
    items.push(item);
}
console.log(items);

chrome.runtime.sendMessage({items:items});

