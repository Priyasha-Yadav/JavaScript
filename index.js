


//Function
function cal_attendance(number){
    console.log("Calculate Attendance")
    var i=1;
    for(;i<=number;i=i+1){
    console.log(i)}
    
}
cal_attendance(42);

function cal_attendance(number1, number2){
    console.log(number1);
    console.log(number2);
    
}
cal_attendance(1,8);
cal_attendance();
cal_attendance(1);
cal_attendance(null,8);
cal_attendance(1,undefined);
cal_attendance(3,4,586786);
cal_attendance('hello');
cal_attendance('000',true);
cal_attendance('999',true);




//Largest of three numbers

var a=11;
var b=10;
var c=9;


if (a===b|b===c|a===c)

{
if(a===b & (a,b)>c){console.log("a and b")}
else if(a==c & (a,c)>b){console.log("a and c")}
else if (b===c& (b,c)>a)
{console.log("b and c")}
else {console.log("a, b and c")}}

if (a!=b!=c)

{
if (a>b & a>c){console.log("a")}
else if (b>a & b>c){console.log("b")}

    
}

//Specified range [25 to 50]
let b=1;
if (25<b & b<50){console.log("Within specified range")}
else{console.log("Nope")}


// //Divisibility
// let a=56;
// if (a%2==0){console.log("Divisible by 2")}
// if (a%3==0){console.log("Divisible by 3")}
// if (a%4==0){console.log("Divisible by 4")}


//Isoceles, equilateral, obutuse, right,acute

let a=60;
let b=60;
let c=60;
if (a===b===c){console.log("Equilateral")}

// if(a!=b!=c)
// {
// if(a<90& b<90& c<90){console.log("Acute")}
// else if (a>90|b>90|c>90){console.log("Obtuse")}
// else if (a===90|b===90|c===90){console.log("Right")}
    
// }

// if (a===b|b===c|a===c){console.log("Isoceles")}






// for (var i=1;i<=10;i=i+1)
// {console.log("9 *",i,"=",i*9)}
// for (var i=0;i<=100;i=i+2)
// {console.log(i)}

// for (var i=10;i>=0;i=i-1)
// {console.log(i)}


// var i=0;
// while(i<=10){i=i+1
//     console.log("9 *",i,"=",i*9)
// }


// var a=0;
// while(a<100){a=a+2
//     console.log(a)
// }

// var i=10;
// while(i>=0){
//     console.log(i);
//     i=i-1;
// }


var i=1;
do{console.log("9 *",i,"=",i*9)
i=i+1;
}
while(i<=10){
    
}

var a=10;
do{i--;
console.log(i)
    
}
while(i>=1){}


var b=0;
do{b=b+2;
console.log(b)
    
}
while(b<100){}


// var student count greater than 60 (denied)or not(call_attendance)

// var student_count=52;
// function cal_attendance(student_count){
//   for (i=1;i<=student_count;i=i+1)
//   console.log(i)
// }


// if (student_count>60){console.log("Entry Denied")}
// else if (student_count<=0){console.log("Invalid Student Count")}
// else{cal_attendance(student_count)}

// let mobiles= ["iPhone", "Samsung", "Pixel","Nokia","Vivo"];

// for (var i=0;i<=mobiles.length;i++)
// {
//   console.log(mobiles[i])
// }


// let numbers=[1,'Hello',,,,,,,,,null,undefined, function test(){}]


// console.log(numbers)

// let mobiles = ["iPhone", "Samsung", "Pixel","Nokia","Vivo",1,2,3];

// var i=0;
// while(mobiles[i]!=undefined){
//   console.log(mobiles[i])
//   i++
// }


//Factorial
//Fibonacci

var factorial=3;
a=1;
for (i=1;i<=factorial;i++)
{
  a=i*a;
  
}
console.log(a)


var steps=8;
var a=0;
var b=1;
console.log(a)
console.log(b)
for (i=0;i<steps;i++){
    c=a+b;
    console.log(c)
    b=c
    a=b
}

b=[{
    name:'Blane', rollno:1, 
    stu_mob:{self_:9489, parents:9849}},
    
    {name:'Nikolas',rollno:2,stu_mob:{self_:121212, parents:212121}
      
    },
    {name:'Arion',rollno:3,stu_mob:{self_:1234, parents:4321}
      
    }]
  
  
  for(var i=0;i<(b.length);i++)
  {
    console.log(b[i].name)
  }
  
  console.log(b[1].stu_mob.self_)
  



let myFavSuperheroes=['Ironman','Thor','Helios','Shaktiman','Batman']
console.log(myFavSuperheroes[0])
console.log(myFavSuperheroes.length)

myFavSuperheroes[3]="Spiderman"
console.log(myFavSuperheroes[3])

myFavSuperheroes[5]="Vanshika"
console.log(myFavSuperheroes[5])

myFavSuperheroes.unshift('Khushi');
console.log(myFavSuperheroes)

myFavSuperheroes.push('Dristi');
(console.log(myFavSuperheroes))

delete myFavSuperheroes[6];
console.log(myFavSuperheroes)
delete myFavSuperheroes[1];
console.log(myFavSuperheroes)
myFavSuperheroes.splice(3,0,'Vanshika');
console.log(myFavSuperheroes)

myFavSuperheroes.splice(4,2,'Dristi');
console.log(myFavSuperheroes)

let superheroUniverse=[['Ironman','Spiderman','Thor','Captain America','Vision'],
['Superman','Batman','Wonder Woman','Flash','Aquaman']]
console.log(superheroUniverse)

console.log(superheroUniverse[0][0])
console.log(superheroUniverse[1][0])



// for(i=1;i<=100;i++)
// {
//   if (i%2==0){console.log(i)}
// }


// i=0;
// while(i<100)
// {
//   if (i%2==1){console.log(i)}
//   i++
// }

// i=1;
// do{i++
// if(i%3==0){console.log(i)}
// }
// while(i<100)


var a=5;
var b=2;
console.log(a+b)

var a=5;
var b=2;
console.log(a-b)


var a=5;
var b=2;
console.log(a*b)


var a=5;
var b=2;
console.log(a/b)



var a=5;
var b=2;
console.log(a**b)

var a=5;
var b=2;
console.log(a%b)


var x=2;
var y=4;
console.log(x**y)


var z=7;
console.log(--z)


// let number='153';
// console.log(number[3])
// let a=0;
// for(i=0;number[i]!=undefined;i++)
// {
//   a=((number[i]**number.length)+a)
// }

// if(a==number){
//   console.log("Yes, Armstrong Number")
  
// }
// else {console.log("Not an Armstrong Number")}

// let number=857865;
// a=0;
// let b= number.toString().split('')
// for(i=0;number[i]!=undefined;i++)
// {
//   a+=(number[i]**number.length)
// }

// if(a==number){
//   console.log("Yes, Armstrong Number")
  
// }
// else {console.log("Not an Armstrong Number")}


let number=857865;
a=0;
let b= number.toString().split('')
for(i=0;number[i]!=undefined;i++)
{
  a+=(number[i]**number.length)
}

if(a==number){
  console.log("Yes, Armstrong Number")
  
}
else {console.log("Not an Armstrong Number")}

function isPrime(number) {
  if (number <= 1) return false; // 0 and 1 are not prime numbers
  if (number <= 3) return true; // 2 and 3 are prime numbers

  if (number % 2 === 0 || number % 3 === 0) return false; // multiples of 2 or 3 are not prime

  for (var i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false; // check divisibility
  }

  return true;
}

for (var num = 1; num <= 100; num++) {
  if (isPrime(num)) {
    console.log(num);
  }
}
// let start;
// let stop;
// let steps;
// function range(start,stop,steps)
// {
//   for(i=start;i<=stop; i+=steps)
//   {console.log(i)}
// }
// range(45,65,1)
