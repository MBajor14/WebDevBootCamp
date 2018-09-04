var faker = require("faker");


title();
printProduct(10);


function title(){
    console.log("=====================");
    console.log("WELCOME TO MY SHOP!");
    console.log("=====================");
}

function printProduct(num){
    for(var i = 0; i < num; i++){
        var randomProductAdjective = faker.commerce.productAdjective();
        var randomProductMaterial = faker.commerce.productMaterial();
        var randomProduct = faker.commerce.product();
        var randomPrice = faker.commerce.price();
        
        console.log(`${randomProductAdjective} ${randomProductMaterial} ${randomProduct} - $${randomPrice}`);
    }
}