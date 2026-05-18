// var a=90;
// var b=8;// declaration and initialization   var b=declaration + initialization=b=8
//         console.log("the value of a ",a)
//         console.log("the value of b ",b)
// var sum =a+b// 90+8=98
//         console.log("the value of sum ",sum)
// var sub =a-b
//         console.log("the value of sub ",sub)
//         var mul=a*b
//         console.log("the value of mul ",mul)
// var div=a/b
//         console.log("the value of div ",div)
// var mod=a%b
//         console.log("the value of mod ",mod)
//     // data types 3
//     // string ""
//     // number 35656346
//     // boolean true/false

//     var Name="john doe" //string
//     console.log("the value of name ",Name)
//     var age=43//number
//     console.log("the value of age ",age)
//     var isMarried=true//boolean
//     console.log("the value of isMarried ",isMarried)
    
//     // variables and data types 
//     //initilization and declaration
//     //arithmetic operators + - * / % ++ --
//     //assignment operators = += -= *= /= %=
//     //comparison operators == === != !== > < >= <=
//     // logical operaters && (AND) || (OR) ! (NOT)

    

// var a=10;
// var b=10;
// var c=10;
// var x=a+b+c
//  a=20;
// console.log("the value of x is  ",a)
// //opetraters
// ///arithmetic operators

// var firstNumber=10;
// var secondNumber=10;
// var thirdNumber=10;
//  var sum=firstNumber+secondNumber+thirdNumber
//  console.log("the value of sum is ",sum)
//  var sub=firstNumber-secondNumber
//  console.log("the value of sub is ",sub)
//  var mul=firstNumber*secondNumber                               
//         console.log("the value of mul is ",mul)

//        //prefix increment ,++x,--x//pre means phala
//        //postfix increment x++,x--//post means baad me

//        //++a,--a,a++,a--
//        var a=1
//        var b=(++a)+(--a)+(++a)+(--a)+(++a)
//         console.log("the value of b is ",b)

//                var B=(a++)+(a--)+(++a)+(--a)+(--a)
//         console.log("the value of B is ",B)

//         //comaprison operators
        
// var firstNumber=10;
// var secondNumber="100";


// console.log("the value of firstNumber==secondNumber is ",firstNumber==secondNumber)
// console.log("the value of firstNumber===secondNumber is ",firstNumber===secondNumber)
// console.log("the value of firstNumber<secondNumber is ",firstNumber<secondNumber)
// console.log("the value of firstNumber>secondNumber is ",firstNumber>secondNumber)
// console.log("the value of firstNumber<=secondNumber is ",firstNumber<secondNumber)
// console.log("the value of firstNumber>=secondNumber is ",firstNumber>=secondNumber)
// console.log("the value of firstNumber!=secondNumber is ",firstNumber!=secondNumber)
// console.log("the value of firstNumber!==secondNumber is ",firstNumber!==secondNumber)

//logical operators
//  1.AND &&
//  2.OR ||
//  3.NOT !

// AND operater

// true && true=true
// true && false=false
// false && true=false
// // false && false=false
//  var a=49;
//  console.log("the value of a is less then 50 and grater then 40",a<50 && a>40)

//  var b=20
//  console.log("the value of b is less then 50 and grater then 10",b>10 && b<50)

// OR operater

// true || true=true
// true || false=true
// false || true=true
// false || false=false


//  var grade="B"
// var isPassesd=grade=="A"||grade=="B"||grade=="C" //false||true||false=true
// console.log("the value of isPassed is ",isPassesd)
// var d=0;
// var result=d>0||d<100||d==0//false||true||true=true
// console.log("the value of result is ",result)

// NOT operater
// !true=false
// !false=true



//  var isRainig=true
//  var checkRainig=!isRainig//!true=false
//  console.log("the value of checkRainig is ",checkRainig)
//  var isSunny=false
//  var checkSunny=!isSunny//!false=true
//  console.log("the value of checkSunny is ",checkSunny) 


// propmt function
//  var userMarks=prompt("enter ur marks") //answer is in string ""
//  console.log("the value of userMarks is ",userMarks)
 //convert string to number

//   var userMark=parseFloat(prompt("enter ur  marks"))
//  console.log("the value of userMarks in number ",userMark)



//   var userMark=parseInt(prompt("enter ur in decimal marks"))
//   console.log("the value of userMarks in number ",userMark)

//  if (condition){
//     body } 
// else{
        // }
        // var userAge=parseInt(prompt("enter ur age"))
        // if(userAge<=18){
        // console.log("your not eligibel",userAge)
        // }else{
        // console.log("your eligibel",userAge)
        // }

        
        // var week=parseInt(prompt("enter week number"))
        // if(week==0){
        //         console.log("monday")
        // }
        // else{
        //         console.log("not monday",week)
        // }
// else if

//  var days=parseInt(prompt("enter week number"))
//         if(days==1){
//                 console.log("monday")
//         }else if(days==2){
//          console.log("tuesday")       
//         }else if(days==3){
//          console.log("thursday")       
//         }else if(days==4){
//          console.log("friday")       
//         }else if(days==5){
//          console.log("saturday")       
//         }else if(days==6){
//          console.log("sunday")       
//         }
//         else{
//                 console.log("invalid week number ",days)
//         }


        // var userMarks=parseInt(prompt("enter ur marks"))
        // if(userMarks>=80){
        //         console.log("A+ grade")
        // }else if(userMarks>=70){
        //         console.log("A grade ")
        // }else if(userMarks>=60){
        //         console.log("B grade ")
        // }else if(userMarks>=50){
        //         console.log("C grade ")
        // }else if(userMarks>=40){
        //         console.log("D grade ")
        // }else{
        //         console.log(" you are fail because ur number is less then 40",userMarks)
        // }
        

        // let number=56
        // console.log("check data type ",typeof number)
// var check="3"
// console.log("matching",check=="3")
// console.log("matching",check===3) //mathcing type and value


// switch case 
//according to week


// var weekNumber=3
// let weeks=0;
// switch(weekNumber){
//         case 1:
//          weeks ="monday" 
//          break; 
//           case 2:
//          weeks ="tuesday" 
//          break;
//           case 3:
//          weeks ="wed" 
//          break;
//           case 4:
//          weeks ="thursday" 
//          break;
//         default:
//                 weeks="invalid week number"   

// }


// loops 
// 1.while loop
//2. do while loop 
/// 3. for loop

//while loop

// var i=1;
// while(i<=5){
// console.log("the value of i in while loop ",i) 
// i++
// }  

// // do while loop 
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i <=5 );



// for loop
// for(var i=0;i<=5;i++){
//         console.log("the value of for loop is",i)
// }
  
// for(var i=0;i<=5;i++){
//         console.log("the value of for loop is",i)
//         if(i==3){
//                 console.log("if value ",i)
//         }else if(i==5){
//                 console.log("the value of  else if is",i)
//         }


// }

// var city0="Karachi"
// var city1="Lahore"
// var city2="Islamabad"
// var city3="Quetta"
// var city4="Peshawar"
// var city5="Faisalabad"

// console.log("first name",city1)

// Array=[]
// data structure 
//  var array_name=[element1,element2,element3,...]
// var citiesName=["Karachi","Lahore" ,"Islamabad","Quetta"] 
// console.log("first name",citiesName[2])
// console.log("first name",citiesName[0])

// var num=[10,20,30]

// console.log("num",num)
// console.log("num[0]",num[0])
// console.log("num[1]",num[1])
// console.log("num[2]",num[2])

// var citiesName=["Karachi",
//         "Lahore" ,
//         "Islamabad",
//           "pish",
//         "Quetta"] 


//  var cities = [];

// for (var i = 0; i < 3; i++) {
//     cities[i] = prompt("Enter city name");
// }

// for (var i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }

// var studentName = [];
//  for (var i = 0; i < 5; i++) {
//   studentName[i] = prompt("Enter student name " );
// }
// console.log("student name",studentName)


// for(var i=0;i<5;i++){
//         let row=""
//         for(var j=0;j<=i;j++){
//          row +="*"
//         }
//         console.log(row,i)

// }

// for (var i = 0; i < 5; i++) {
//   // outer loop
//   let row = "";
//   for (var j = 0; j <=i; j++) {
//     row += "*"; // *****
//   }
//   console.log(row, i);
// }


// var array=["fsd","lhr","isd","psh"]
// array[0]="silkt"
// console.log("update array",array[0])

// 1.push()  ..add item last of an array
//2. pop() ..remove elements last of an array
// var array=["fsd","lhr","isd","psh"]
// array.pop()
// array.push("pk","dkl")

// console.log("update array",array)

//shift  ...remove elements in start of an array
// unshift ..add elements   in start of an array
 
// var array=["fsd","lhr","isd","psh"]
// array.shift()
// console.log(" array",array)

// var array=["fsd","lhr","isd","psh"]
// array.unshift("silk","dgk")
// console.log("🚀 array",array)


//1.splice 
//2.slice

// splilce
// var array=["fsd","lhr","isd","psh"]
// array.splice(1,2,"skl","us")//first element start and last element delete element
// console.log(" array",array)

// var array=["1","2","3","4","5","6","7","8","9"]
// array.splice(1,2,"10","11")
// console.log(" array",array)

// // slice 
// var array=["1","2","3","4","5","6","7","8","9"]
// var newArray=array.slice(3,9) //first element start and last element end
// console.log("  original array",array)
// console.log("  new array",newArray)

// var array=["1","2","3","4","5","6","7","8","9"]

// var newArray=array.slice(-5) //add last element and form new array
// console.log("  new array",newArray)

// // slice example 
// var animals=["cat","dog"]
// animals.push("elephant","tiger","lion")
// console.log("animals",animals)
// // 
// var animals=["cat","dog"]
// animals.push("elephant","tiger","lion")
// animals.pop()
// animals.shift()
// animals.unshift("fox")
// console.log("animals",animals)
// // var array=["1","2","3","4","5","6","7","8","9"]
// // array.splice(1,5,"10","11")
// // console.log(" array",array)

// var array=["1","2","3","4","5","6","7","8","9"]

//  var newArray=array.slice(4,9)
// console.log(" array",newArray)

// loops//for ///while///do while
//for loop
// for(var i=0;i<5;i++){
//         console.log("the value of for loop is",i)
// }

// *1
// **2

// for(var i=0;i<5;i++){
//         let row=""
//         for(var j=0;j<i;j++){
//          row +="*"       
//         }
//         console.log(row,i)
// }




//   var cities = [];

// for (var i = 0; i < 3; i++) {
//         cities[i]=prompt("enter cities name")
// }
// for(var i=0;i<cities.length;i++){
//     console.log(cities[i])
// }


// for (var i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }

//round 

// var num=4.5
// var roundValue=Math.round(num)
// console.log("round",roundValue)

// ceil

// var num=4.4
// var ceilValue=Math.ceil(num)
// console.log("ceil",ceilValue)


// var num=4.8
// var ceilValue=Math.floor(num)
// console.log("round",Math.floor(num))

// var ceilValue=Math.random()
// console.log("round",ceilValue)



// var ceilValue=Math.floor(Math.random())
// console.log("round",ceilValue)


// var ceilValue=Math.floor(Math.random()*10)+100
// console.log("round",ceilValue)

// var randomNumber=Math.floor(Math.random()*10)
// console.log("random ",randomNumber)

// var tail=prompt("ENTER FRST player num")
// var head=prompt("ENTER SECOND player num")
// if(tail==0){
//         console.log("tail wins",tail)
// }else{
//         console.log("head wins",head)
// }


// var num = Math.floor(Math.random() * (max - min + 1)) + min;

 
// var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];

// var userCity = prompt("Enter your city name");

// let cleanCities = false;

// for (var i = 0; i < cities.length; i++) {

//     if (cities[i] == userCity) {
//         cleanCities = true;
//         console.log("your city is clean", userCity);
//         break;
//     }
// }

// if (cleanCities == false) {
//     console.log("your city is not clean", userCity);
// }

// var userCity=prompt("Enter your upper cse city name")
// var lower=userCity.toLowerCase()
// console.log("lower case",lower)


// var userCity=prompt("Enter your lower case city name")
// var lower=userCity.toUpperCase()
// console.log("upper case",lower)

// var sentence =
// "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them  to grasp their minds and motives in ways that they cannot grasp his.";
// var checkWord=sentence.indexOf("World War II")
// if(checkWord !==-1){
//        sentence = sentence.slice(0,checkWord)+"Second World War"+sentence.slice(checkWord +12)
//         console.log("update world",sentence)
// }

// var sentence =
// "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them  to grasp their minds and motives in ways that they cannot grasp his.";
// for(var i=0;i<sentence.length;i++){
//         if(sentence.slice(i,i+12)=="World War II"){
//                 sentence=sentence.slice(0,i)+"Second World War"+sentence.slice(i+12)
//         }
//         console.log("update word",sentence)
// }


// var text="My name is john doe and i am a software engineer"
// alert("Do you want to replace text in " +text)
// var replace=prompt("Enter word to replace")
// var replaceWith=prompt("Enter word to replace with")
// var newtext=text.replace(replace,replaceWith)
// console.log("updated text is ",newtext)



// var date=new Date()
// console.log("date",date)
// var getdate=date.getFullYear()
// console.log("get date",getdate)







