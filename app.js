//================If-Else-And-Else-If-Statement===============//

let city = prompt("Enter Your Beautiful City..")
if(city === "Karachi"){
    console.log('"welcome to the Lights of City"')
} else if(city === "karachi"){
    console.log('"welcome to the Lights of City"')
}
else if(city === "Islamabad"){
    console.log('"Welcome, Islamabad is the Capital of Pakistan"')
}
else if(city === "islamabad"){
    console.log('"Welcome, Islamabad is the Capital of Pakistan"')
}
else{
    console.log('"Welcome, That is the Very Beautiful City"')
}

//===============Gender==============//

let gender = prompt("Enter Your Gender:")
let male = "Male"
let Male = "male"
let Felmale = "Female"
let female = "female" 
if(gender === male || gender === Male){
    console.log("Good Morning Sir.")
}
else if(gender === female || gender === Felmale){
    console.log("Good Morning Ma'am.")
}
else{
    console.log("Please Enter Your Gender...")
}

//==================Traffic-Signal===============//

let traffic = prompt("Enter any 1 color of Traffic Signal:")
let red = "red"
let Red = "Red"
let yellow = "yellow"
let Yellow = "Yellow"
let green = "green"
let Green = "Green"
if(traffic === red || traffic === Red){
    console.log('"Must Stop."')
}
else if(traffic === yellow || traffic === Yellow){
    console.log('"Ready to Move."')
}
else if(traffic === green || traffic === Green){
    console.log('"Move Now."')
}
else{
    console.log('"Please Enter the color of Traffic Signal."')
}

//==============Car-Fuel=============//

let carFuel = prompt("Enter yfour car fuel in Liter:")
let Liter = "0.25 Liters"
let Liters = "0.50 Liters"
let liter = "1 Liters"

if(carFuel == Liter){
    console.log("“Please refill the fuel in your car”")
}
else if(carFuel == Liters){
    console.log("Your Fuel is Average!")
}
else if(carFuel == liter){
    console.log("Your Fuel is Perfect..")
}
else{
    console.log("This program will run for 1 letter only! \nL letters  of Liters must be capitalized.")
}

//=======================Programing==================//
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}

//=================MarkSheet===========//

let obtainedMarks1 = Number(prompt("Enter you Obtained Marks in English:"))
let obtainedMarks2 = Number(prompt("Enter you Obtained Marks in Urdu:"))
let obtainedMarks3 = Number(prompt("Enter you Obtained Marks in Math:"))
let totalMarks = 300
let Grade = 0;
let totalObatainedMarks = (obtainedMarks1 + obtainedMarks2 + obtainedMarks3)
let Percentage = (totalObatainedMarks / 300)*100
//=================MarkSheet======Console======//
console.log("Marks Sheet:")
console.log("Total marks: "+totalMarks)
console.log("Obtained marks: "+totalObatainedMarks)
console.log("Percentage: "+Percentage+"%")
console.log("Grade: "+Grade)

//=================MarkSheet========Display=======//
document.write("<h2>Marks Sheet</h2>")
document.write("<br/><br/>Total marks: "+totalMarks)
document.write("<br/>Obtained marks: "+totalObatainedMarks)
document.write("<br/>Percentage: "+Percentage+"%")

if(Percentage === 80 || Percentage > 80){
Grade = "A-One" 
console.log("Remarks : Excellent")
}
else if(Percentage === 70 || Percentage > 70){
    Grade = "A"
    console.log("Remarks : Good")
}
else if(Percentage === 60 || Percentage > 60){
    Grade = "B"
    console.log("Remarks : You will need to Improve")
}
else if(Percentage < 60){
    Grade = "Fail"
    console.log("Remarks : Sorry")
}else{
    console.log("Sorry, the input has been taken incorrectly, which is why the program is not running")
}
//=================MarkSheet========Display=======//

if(Percentage === 80 || Percentage > 80){
    Grade = "A-One" 
    document.write("<br/>Grade: "+Grade)
    document.write("<br/>Remarks : Excellent")
    }
    else if(Percentage === 70 || Percentage > 70){
        Grade = "A"
        document.write("<br/>Grade: "+Grade)
        document.write("<br/>Remarks : A")
    }
    else if(Percentage === 60 || Percentage > 60){
        Grade = "B"
        document.write("<br/>Grade: "+Grade)
        document.write("<br/>Remarks : You will need to Improve")
    }
    else if(Percentage < 60){
        Grade = "Fail" 
        document.write("<br/>Grade: "+Grade)
        document.write("<br/>Remarks : Sorry")
    }else{
        console.log("Sorry, the input has been taken incorrectly, which is why the program is not running")
    }

    //=================Guess-Game=============//
     
    let userNumber = Number(prompt("Enter your Any Lucky Number from 1 to 10."))
    let winnerNumber = (Math.floor(Math.random())*10)
    let luckyNumber = ("Lucky Number is:"+winnerNumber)
    let yourNumber = ("Your Number is:"+userNumber)
    
    //=================Guess-Game=========Console======//

    console.log(winnerNumber)
    console.log(luckyNumber)
    console.log(yourNumber)

    if(winnerNumber === userNumber){
        console.log("“Bingo! Correct Answer”")
    }
    else{
        console.log("“Close enough to the correct answer”")
    }
 
//=================Guess-Game=========Display======//

document.write("<br/><br/><br/><h2>Guess-Game<h2/>")

document.write("<br/>"+winnerNumber)
document.write("<br/>"+luckyNumber)
document.write("<br/>"+yourNumber)

if(winnerNumber === userNumber){
    document.write("<br/>“Bingo! Correct Answer”")
}
else{
    document.write("<br/>“Close enough to the correct answer”")
}

//==============Checker-Odd-or-Even-Number===========//
let num = Number(prompt("Enter you any number."))
if(num % 2 === 0){
    console.log(num + " Your number is Even.")
}else{
    console.log(num + " Your number is Odd.")
}
//==============Checker-Odd-or-Even-Number====Display=======//
document.write("<br/><br/><h2>Number checker</h2>")
if(num % 2 === 0){
    document.write(num + "<br/><h3> You number is Even.</h3>")
}else{
    document.write(num + "<br/><h3> You number is Odd.</h3>")
}

//==========Checker-Number-Division-by-3===========//
let number = Number(prompt("Enter your any number with division by 3."))
if(number % 3 === 0){
    console.log(number + " Yes, This number is division by 3.")
    alert("yes, This number is division by 3.")
}else{
    console.log(number + " No, This number is not division by 3.")
    alert(" No, This number is not division by 3.")
}
//==========Checker-Number-Division-by-3=======Display=====//
document.write("<br/><br/><h2>Checker Number Division by 3.</h2>")
if(number % 3 === 0){
    document.write(number + " <br/><br/><h4> Yes, This number is division by 3.<h4/>")
}else{
    document.write(number + " <br/><br/><h3> No, This number is not division by 3.<h3/>")
}
//==========//Weather-Tempreture//============//
centiGrate = Number(prompt("Enter the current weather Tempreture in Centigrate!"))
if (centiGrate > 40){
    console.log("“It is too hot outside.”")
}
else if (centiGrate > 30){
    console.log("“The Weather today is Normal.”")
}
else if (centiGrate > 20){
    console.log("“Today’s Weather is cool.”")
}
else if(centiGrate < 10 || centiGrate > 10){
    console.log("“OMG! Today’s weather is so Cool.”")
}
else{
    console.log("I Think your input is wrong, So you input any number from One to Hundred in terms of Centigrade")
}
console.log(centiGrate)

//==========//Weather-Tempreture//=======Display=====//
document.write("<br/><h1>Weather-Tempreture</h1>")
// centiGrate = Number(prompt("Enter the current weather Tempreture in Centigrate!"))
if (centiGrate > 40){
    document.write("“It is too hot outside.”")
}
else if (centiGrate > 30){
    document.write("“The Weather today is Normal.”")
}
else if (centiGrate > 20){
    document.write("“Today’s Weather is cool.”")
}
else if(centiGrate < 10 || centiGrate > 10){
    document.write("“OMG! Today’s weather is so Cool.”")
}
else{
    document.write("I Think your input is wrong, So you input any number from One to Hundred in terms of Centigrade")
}

//==============Calculator============//
let number1 = Number(prompt("please enter the first number for calculator"))
let number2 = Number(prompt("please enter the second number for calculator"))
let calculate = prompt("Enter +,-,*, / & % for the calculate")

var result;
if(calculate === "+"){
    result = number1 + number2 
}
 else if(calculate === "-"){
    result = number1 - number2 
}
else if(calculate === "*"){
    result = number1 * number2 
}
else if(calculate === "/"){
    if(number2 === 0){
        alert("Error: Division by zero is not allowed.")
    }else {
        result = number1 / number2
    }
}
else if(calculate === "%"){
    result = number1 % number2
}
else{
    alert("Invalid operation. Please enter +, -, *, /, or %.");
}
if (result !== undefined) {
    alert("Result: " + result);
  }