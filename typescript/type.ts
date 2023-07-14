var str:string="Sabana";
console.log(str);              //String

var num:number=14.5;
console.log(num);              //number

var b:boolean=true;
console.log(b);                //boolean

enum digit {
  digit1=10,
  digit2,                     //enum
  digit3

}
console.log(digit);


interface datas{

  name : string;             //interface
  age : number;
  phNo : number;

}

const datas1 : datas={

 name : "Riyas",
 age : 16,
 phNo : 9364726762

}

console.log(datas1);


type Items = 
    {
        "id" : number,
        "productname" : string,
        "shopname" : string,
        "type" : string

    }

var gs : any = [
    {
        "id" : 1,
        "productname" : "watermelon",
        "shopname" : "royal stores",
        "type" : "fruit"

    },
    {
        "id" : 2,
        "productname" : "cauliflower",
        "shopname" : "thiru stores",
        "type" : "vegetable"

    },
    {
        "id" : 3,
        "productname" : "dragon fruit",
        "shopname" : "royal stores",
        "type" : "fruit"
    },
    {
        "id" : 4,
        "productname" : "Brocolli",
        "shopname" : "royal stores",
        "type" : "vegetable"
    }

]
//for each function
//let fn: Items | undefined;
gs.forEach(({productname, type,shopname}) => {
    if(shopname==="royal stores"&& type==="fruit"){
        console.log(`The product name with type fruit is ${productname}`);
      //console.log(`The product name with type fruit is ${id}`);
    }
    
  });
  

  
  //filter function

 // let ps: Items | undefined;

 let ps= gs.filter((details) =>details.shopname==="royal stores");
 console.log(`The products in royal stores with type fruit is`);
 console.log(ps);

 //find function

let ff = gs.find((info)=>info.type==="fruit");
console.log(`The first product with type fruit is`);
  console.log(ff);

//fetching single property from array

let fp = gs.map((product)=> {
    return product.productname;
  });
  
  console.log(`The Product names  are ${fp}`);

 //update value using map function
 
 let ch = gs.map((sale) => {
    if (sale.productname == "watermelon") {
      return {...sale, productname: "jackfruit"};
    }
    return sale;
  
  });
   console.log(`The updated array using map function is `)
   console.log(ch);
  