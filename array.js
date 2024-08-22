
// Create an array with one element:
const points__ = [40];


// Avoid creating an array with one element using new 
const points = new Array(40); 


//Check an array

aa=[1,2,3,4,9,9,7,8,9]
console.log(Array.isArray(aa));
console.log(aa instanceof Array);

// Create an array with 40 undefined elements:
const points_ = new Array(40);


//Array Sorting
a=[1,2,3,4,9,9,7,8,9]
console.log(a.sort()) 

//Converting array into string
const array_name = ["Converting", "Array", "into", "string"];
b = array_name .toString();
console.log(b)

console.log("Hello World!");
//Calculate average marks
let marks=[55,50,78,90,9,20,100]
let sum=0;
for(let i of marks){
    sum=i+sum;
}
console.log(sum/marks.length)

// Price and 10% Offer
let Price = [100, 200, 43, 198, 2943];
let new_price = [];

for (let i = 0; i < Price.length; i++) {
    new_price.push(Price[i] * 0.9); // Apply 10% discount
}

console.log(new_price);

let companies=['Bloomberg','Google','Microsoft','Uber','IBM','Netflix']
let [firstcomp, ,lastcomp]=companies

companies.shift(0,1);
companies.splice(2,1,'Ola')
companies.push('Amazon')
console.log(companies)





