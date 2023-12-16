const items = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector("h2");
    const countItems = item.querySelectorAll("li");
    
    console.log(`Category: ${title.textContent}`);
    console.log(`Elemets: ${countItems.length}`);
});