const categoriesItem = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
