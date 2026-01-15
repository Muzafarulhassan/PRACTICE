//Arithmatic operators
//1.Addition=+
//2.Subtration=-
//3.Multipication=*
//4.divison=/
//5.Modlus=%
//6.Decriment=++a & Incriment==A++
var a=20
var b=10
console.log("the value of a",a)
console.log("the value of b",b)
//1.Addition
var sum=a+b
console.log("the value of sum",sum)
//2.Subtraction
var sub=a-b
console.log("the value of sub",sub)
//Multipication
var mul=a*b
console.log("the value of mul",mul)
//divison cocient ma ans data ha
var div=a/b
console.log("the value of div",div)
//Modlus reminder ma ans data ha
var mod=a%b
console.log("the value of mod",mod)
//Decrement value sa 1 subtract karta ah
var a=1
var b=--a
console.log("the value of b",b)
var b=2
var a=--b
console.log("the value of a",a)
//incriment value ma 1 add kar ta ha
 var a=1
var b=++a
console.log("the value of b",b)
var b=2
var a=++b
console.log("the value of a",a)


//example of decrement & incriment
//c=1
//d=1
//e=(c++)+(c--)+(++c)+(d++)
//    (1)+ (2)+  (2)+  (1)
//          6
//c=2
//d=2
//e=6


//comparison operator
//1.==   match only value 
//2.===  match data types or value
//3.<    lessthan of then value
//4.>    graterthen of the value
//5.<=    lessthan and equal of then value
//6.>=    graterthen and equal of the value
var firstNumber=10
var secondNumber=40
//1.==   match only value 
console.log("the valeu of firstNumber==secondNumber",firstNumber==secondNumber)
//2.===  match data types or value
console.log("the valeu of firstNumber===secondNumber",firstNumber===secondNumber)
//3.<    lessthan of then value
console.log("the valeu of firstNumber>secondNumber",firstNumber>secondNumber)
//4.>    graterthen of the value
console.log("the valeu of firstNumber<secondNumber",firstNumber<secondNumber)
//5.<=    lessthan and equal of then value
console.log("the valeu of firstNumber>=secondNumber",firstNumber===secondNumber)
//6.>=    graterthen and equal of the value
console.log("the valeu of firstNumber<=secondNumber",firstNumber===secondNumber)


//Lpgical operator
//1. &&  AND 
//2. ||  OR
//3. !   NOT


//1. &&  AND 
var a=5
 console.log("the value of a is less then 50 and grater then 4",a<50 && a>4)
var b=47
console.log("the value of a is less then 50 and grater then 45",b<50 && b>45)
//2. ||  OR
var a=67
console.log("the value of a is less than 100 and grater than 50",a<100 ||a>50)
var grade="A"
var isPassed=grade=="A"||grade=="B"||grade=="C"
console.log("the value of isPassed",isPassed)
//3. !   NOT
var isRainig=!true
console.log("the value of isRainig",isRainig)

//if eles
var weeks=parseInt(prompt("enter week number"))
 if (weeks==1){
console.log("is Monday") 
 }else if(weeks==2){
console.log("is Tuesday") 
 }else if(weeks==3){
console.log("is Wednesday") 
 }else if(weeks==4){
console.log("is Thirsdat") 
 }else if(weeks==5){
console.log("is Friday") 
 }else if(weeks==6){
console.log("is Saturday") 
 }else if(weeks==7){
console.log("is Sunday") 
 }
else{
    console.log("is not valid weeks")
}

