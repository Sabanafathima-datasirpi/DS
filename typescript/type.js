var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var str = "Sabana";
console.log(str); //String
var num = 14.5;
console.log(num); //number
var b = true;
console.log(b); //boolean
var digit;
(function (digit) {
    digit[digit["digit1"] = 10] = "digit1";
    digit[digit["digit2"] = 11] = "digit2";
    digit[digit["digit3"] = 12] = "digit3";
})(digit || (digit = {}));
console.log(digit);
var datas1 = {
    name: "Riyas",
    age: 16,
    phNo: 9364726762
};
console.log(datas1);
var gs = [
    {
        "id": 1,
        "productname": "watermelon",
        "shopname": "royal stores",
        "type": "fruit"
    },
    {
        "id": 2,
        "productname": "cauliflower",
        "shopname": "thiru stores",
        "type": "vegetable"
    },
    {
        "id": 3,
        "productname": "dragon fruit",
        "shopname": "royal stores",
        "type": "fruit"
    },
    {
        "id": 4,
        "productname": "Brocolli",
        "shopname": "royal stores",
        "type": "vegetable"
    }
];
//for each function
//let fn: Items | undefined;
gs.forEach(function (_a) {
    var productname = _a.productname, type = _a.type, shopname = _a.shopname;
    if (shopname === "royal stores" && type === "fruit") {
        console.log("The product name with type fruit is ".concat(productname));
        //console.log(`The product name with type fruit is ${id}`);
    }
});
//filter function
// let ps: Items | undefined;
var ps = gs.filter(function (details) { return details.shopname === "royal stores"; });
console.log("The products in royal stores with type fruit is");
console.log(ps);
//find function
var ff = gs.find(function (info) { return info.type === "fruit"; });
console.log("The first product with type fruit is");
console.log(ff);
//fetching single property from array
var fp = gs.map(function (product) {
    return product.productname;
});
console.log("The Product names  are ".concat(fp));
//update value using map function
var ch = gs.map(function (sale) {
    if (sale.productname == "watermelon") {
        return __assign(__assign({}, sale), { productname: "jackfruit" });
    }
    return sale;
});
console.log("The updated array using map function is ");
console.log(ch);
