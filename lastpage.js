//Hello Computer
console.log("Hello Computer");

//name, address, city
let question2=[{Name: 'Priyasha'}, {Address: "86/xyz, Gorwa, Vadodara, Gujarat"}, {City: 'Vadodara'}]


for(i=0; question2[i]!=undefined;i++){
    console.log(question2[i])
}

// number from 1 to 10
for(i=1;i<=10;i++){
    console.log(i)
}

//Specified range [101 to 130]
for(let o=101;o<=130;o++){
    console.log(o)
}


//Area of Cirlce
let r=32;
console.log("Area =",3.14*(r**2))

// +,-,/,*
let number1=4;
let number2=5;
function add(number1,number2){
    console.log(number1,"+",number2,"=",number1+number2)
}

add(43,34)

function subtract(number1, number2){
    console.log(number1,"-",number2,"=",number1-number2)
}

subtract(54,7)
function multiply(number1, number2){
    console.log(number1,"*",number2,"=",number1*number2)
}

multiply(5,5676)

function divide(number1, number2){
    console.log(number1,"/",number2,"=",number1/number2)
}

divide(3746823765,5)

//swap value

let number3;
number3=number1;
number1=number2;
number2=number3;
console.log('number1:',number1);
console.log('number2:',number2);
//or

let num1=3;
let num2=5;
num1=num1+num2 //8
num2=num1-num2 //3
num1=num1-num2 //5
console.log(num1,num2)

//or

array=[num1,num2]
num2= array[1]
num1=array[0]

console.log(num1,num2)



//max of 2
if (number1>number2){
    console.log(number1,'is greater')
}
else if (number1==number2){
    console.log('Both are equal')
}
else{
    console.log(number2,'is greater')

}
//max of 3
if (number1>number2 && number1>number3){
    console.log(number1,'is greater')
}
else if (number2>number3 && number2>number1){
    console.log(number2,'is greater')
}
else if(number3>number2 && number3>number1)
{
    console.log(number3,'is greater')}

else if(number1==number2 & number1>number3)
{console.log(number1,'and',number2,'are greater')}

else if(number1==number3 & number1>number2)
    {console.log(number1,'and',number3,'are greater')}

else if (number2==number3 & number2>number1){
    {console.log(number2,'and',number3,'are greater')}
}
else if(number1==number2==number3){
    console.log('All numbers are equal')
}

//or
console.log(Math.max(number1,number2,number3))

//min of 2
console.log(Math.min(number1,number2,number3))

//or
if (number1>number2){
    console.log(number2,'is lesser')
}
else if (number1==number2){
    console.log('Both are equal')
}
else{
    console.log(number1,'is lesser')}

//min of 3
if (number1>number2 && number3>number2){
    console.log(number2,'is lesser')
}
else if (number2>number3 && number1>number3){
    console.log(number3,'is lesser')
}
else if(number1<number2 && number1<number3)
{
    console.log(number1,'is lesser')}

else if(number1==number2 & number1>number3)
{console.log(number3,'is lesser')}

else if(number1==number3 & number1>number2)
    {console.log(number1,'and',number3,'are lesser')}

else{
    {console.log(number2,'and',number3,'are lesser')}
}


//multiplication
//To tell whether a number is prime or not
let number=25;
for(i=1;i<=number; i++)
{if(number%i==0)
  {console.log("Factors:",i)}

}

for (p=1;p<=10;p++){
    console.log(number1,'*',p,"=",p*number1)
}
console.log("If the only factors are 1 and" ,number,"...It is prime")

// 45 to 65
let y=0;
for(x=45;x<65;x++)
{ 
  y=x+y  
}
console.log(y)
//switch
function getMonthName(monthNumber) {
    let monthName;

    switch (monthNumber) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "Invalid month number";
    }

    return monthName;
}

// Test the function
console.log(getMonthName(1));  // Output: January
console.log(getMonthName(7));  // Output: July
console.log(getMonthName(13)); // Output: Invalid month number


let array_name=[[1,2,3],[4,5,6],[7,8,9]]
for(g=0;g<array_name.length;g++){
console.log(array_name[g])
}
//length
let a ="Priyasha"
console.log(a.length)

//copy
let f=a;
console.log(f)


//concat
let string1="Hello"
let string2="World"

console.log(string1.concat(string2))

//********** 
star='*'
for(j=1;j<10;j++){
    star='*'+star
}
console.log(star);

//add
add(65,76)


//swap three variables

let numb1=4;
let numb2=5;
let numb3=6;
[numb1,numb2,numb3]=[numb2,numb3,numb1]
console.log(numb1,numb2,numb3) // 5 6 4
//or

numb1=numb1+numb2+numb3 //15
numb2= numb1-numb2-numb3 //numb1 5

numb3=numb1-numb2-numb3// numb2 6
numb1=numb1-(numb2+numb3)// numb3 4

console.log(numb1,numb2,numb3)

//sum of numbers

var numbe = 123;
var str = numbe.toString(); // Convert number to string
var numb_arr = str.split(''); // Split string into an array of characters

let yy = 0;
for (var ss = 0; ss < numb_arr.length; ss++) {
    yy += Number(numb_arr[ss]); // Convert each character to a number and add to the sum
}

console.log(yy); // Output the sum of the digits


var number123=123;
let pow=number123.toString.length;
var sum=0;
while(number123>0){
    var rem = number123%10;
    sum=sum+rem**pow;
    number123=Math.floor(number123/10)
    //number123=(number123-rem)/10
}



// var number123=123;
// let pow=number123.toString.length;
// var sum=0;
// while(number123>0){
//     var rem = number123%10;
//     sum=sum+rem**pow;
//     number123=Math.floor(number123/10)
//     //number123=(number123-rem)/10
// }
// console.log(sum);


//Currency analysis, Prime numbers, armstrong, factorial, fibonacci
function range(start, end, step = 1) {
    let result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

// Example usage
console.log(range(1, 5));        // [1, 2, 3, 4, 5]
console.log(range(5, 15, 2));    // [5, 7, 9, 11, 13, 15]
console.log("Hello world!")

//swap fibonacci currency factorial math.floor range

