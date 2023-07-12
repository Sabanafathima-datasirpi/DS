const groceries = [
    {
        "productname" : "watermelon",
        "shopname" : "royal stores",
        "type" : "fruit"

    },
    {
        "productname" : "cauliflower",
        "shopname" : "thiru stores",
        "type" : "vegetable"

    },
    {
        "productname" : "dragon fruit",
        "shopname" : "royal stores",
        "type" : "fruit"
    },
    {
        "productname" : "Brocolli",
        "shopname" : "royal stores",
        "type" : "vegetable"
    }

]
//for each function

groceries.forEach(({productname, type}) => {
    if(type==="fruit"){
      console.log(`The product name with type fruit is ${productname}`);
    }
  });

//filter function

const productDetails = groceries.filter(groceries => groceries.shopname==="royal stores");
    console.log(`The product details in Royal stores:`);
    console.log(productDetails);

//find function

const productDetail = groceries.find(groceries => groceries.type==="fruit");
console.log(`The first product with ${productDetail.type} is`);
  console.log(productDetail);

//Extracting the values of the same property using map function  

const products = groceries.map((product)=> {
  return product.productname;
});

console.log(`The Product names  are ${products}`);

//update the change using map function

let change = groceries.map((item) => {
  if (item.productname == "watermelon") {
    return {...item, productname: "jackfruit"};
  }
  return item;

});
 console.log(`The updated array using map function is `)
 console.log(change);
//concatenation

const array=[
  {"id":23,
   "method":"concatenation"
}]
const result = groceries.concat(array);
console.log(`The concatenated array is `);
console.log(result);


