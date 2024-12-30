// let a = prompt("enter first num")
// let b = prompt("enter second num")
// alert("sum of a and num is " + (a + b))

// let a = prompt("enter first num")
// let b = prompt("enter second num")
// alert("sub of a and num is " + (a - b))

// let a = prompt("enter first num")
// let b = prompt("enter second num")
// alert("result of a and b num is " + (a * b))


// let a = prompt("enter first num")
// let b = prompt("enter second num")
// alert("result of a and b num is " + (a / b))



// let a = prompt("enter first num")
// let b = prompt("enter second num")
// alert("result of a and b num is " + (a % b))


// let b ;
// console.log(b);

// let a = 5;
// console.log("the initial val for the variable is", a)
// a++
// console.log("the value of a after increment is", a)
// a+= 7;
// console.log("the value of a after addition is", a)
// a--
// console.log("the value of a after decrement is", a)
// a= a%3
// console.log("the reminder is", a)


// let ticket = 600;
// console.log("ticket price of buying 5 tickets is:", ticket * 5);


// let table = 4;
// console.log("table of 4 is 4 * 1 =", 4 * 1);
// console.log("table of 4 is 4 * 2 =", 4 * 2);
// console.log("table of 4 is 4 * 3 =", 4 * 3);
// console.log("table of 4 is 4 * 4 =", 4 * 4);
// console.log("table of 4 is 4 * 5 =", 4 * 5);
// console.log("table of 4 is 4 * 6 =", 4 * 6);
// console.log("table of 4 is 4 * 7 =", 4 * 7);
// console.log("table of 4 is 4 * 8 =", 4 * 8);
// console.log("table of 4 is 4 * 9 =", 4 * 9);
// console.log("table of 4 is 4 * 10 =", 4 * 10);


// let C = 25;
// let F = (C * 9 /5) + 32;
// console.log("25C is", F ,"F");

// let f = 70;
// let c = (f - 32) * 5 / 9;
// console.log("70F is", c ,"C");

// let price1 = 100;
// let price2 = 200;
// let quant1 = 2;
// let quant2 = 3;
// let charges = 150;
// console.log("Total charges :", price1 * quant1 + price2 * quant2 + charges);


// let totalmarks = 550;
// let obtainedmarks= 400;
// console.log("percentage of student 1 is ", obtainedmarks/totalmarks*100)



// let USDOLLAR = 10;
// let Riyal = 25;
// console.log("the total currency in pkr is", USDOLLAR * 104.80 + Riyal * 28);



// let num = 15;
// let cal = num + 5 * 10 / 3;
// console.log(cal);


// let currentyear = 2024;
// console.log(currentyear)
// let dateofbirth = 2000;
// console.log(dateofbirth)
// let age = currentyear - dateofbirth;
// console.log(age);

// let circleradius = 10;
// let circumference = 2 * 3.142 * 10
// console.log("circumfernce of circle is :", circumference)
// let area = 3.142 * 10 * 10
// console.log("area of circle is:", area)


// let favsnack = "chicken tikka"
// let currentage = 17;
// let estage = 50;
// let estamount = 400;
// console.log("i would eat total for the rest of my life is :", estamount * (estage - currentage))




// chapter 6-9

// let user = prompt("enter your name");
// console.log("hello good Morning ", user);


// const number = parseInt(prompt("Enter a number:")) || 5; 

// // Display the table
// alert(`${number} x 1 = ${number * 1}`);
// alert(`${number} x 2 = ${number * 2}`);
// alert(`${number} x 3 = ${number * 3}`);
// alert(`${number} x 4 = ${number * 4}`);
// alert(`${number} x 5 = ${number * 5}`);
// alert(`${number} x 6 = ${number * 6}`);
// alert(`${number} x 7 = ${number * 7}`);
// alert(`${number} x 8 = ${number * 8}`);
// alert(`${number} x 9 = ${number * 9}`);
// alert(`${number} x 10 = ${number * 10}`); 


let user = prompt("Enter your subject 1");
let user1 = prompt("Enter your subject 2");
let user2 = prompt("Enter your subject 3");
let totalMarks = 100;

let obtainedMarks1 = parseInt(prompt("Enter 1st subject obtained marks"));
let obtainedMarks2 = parseInt(prompt("Enter 2nd subject obtained marks"));
let obtainedMarks3 = parseInt(prompt("Enter 3rd subject obtained marks"));

document.write("<h1>Subject | Total Marks | Obtained Marks | Percentage</h1><br>");
document.write(`${user} | ${totalMarks} | ${obtainedMarks1} | ${(obtainedMarks1 / totalMarks * 100).toFixed(2)}%<br>`);
document.write(`${user1} | ${totalMarks} | ${obtainedMarks2} | ${(obtainedMarks2 / totalMarks * 100).toFixed(2)}%<br>`);
document.write(`${user2} | ${totalMarks} | ${obtainedMarks3} | ${(obtainedMarks3 / totalMarks * 100).toFixed(2)}%<br>`);