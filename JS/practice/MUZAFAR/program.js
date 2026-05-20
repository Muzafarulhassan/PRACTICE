// //Arithmatic operators
// //1.Addition=+
// //2.Subtration=-
// //3.Multipication=*
// //4.divison=/
// //5.Modlus=%
// //6.Decriment=++a & Incriment==A++
// var a=20
// var b=10
// console.log("the value of a",a)
// console.log("the value of b",b)
// //1.Addition
// var sum=a+b
// console.log("the value of sum",sum)
// //2.Subtraction
// var sub=a-b
// console.log("the value of sub",sub)
// //Multipication
// var mul=a*b
// console.log("the value of mul",mul)
// //divison cocient ma ans data ha
// var div=a/b
// console.log("the value of div",div)
// //Modlus reminder ma ans data ha
// var mod=a%b
// console.log("the value of mod",mod)
// //Decrement value sa 1 subtract karta ah
// var a=1
// var b=--a
// console.log("the value of b",b)
// var b=2
// var a=--b
// console.log("the value of a",a)
// //incriment value ma 1 add kar ta ha
//  var a=1
// var b=++a
// console.log("the value of b",b)
// var b=2
// var a=++b
// console.log("the value of a",a)


// //example of decrement & incriment
// //c=1
// //d=1
// //e=(c++)+(c--)+(++c)+(d++)
// //    (1)+ (2)+  (2)+  (1)
// //          6
// //c=2
// //d=2
// //e=6


// //comparison operator
// //1.==   match only value 
// //2.===  match data types or value
// //3.<    lessthan of then value
// //4.>    graterthen of the value
// //5.<=    lessthan and equal of then value
// //6.>=    graterthen and equal of the value
// var firstNumber=10
// var secondNumber=40
// //1.==   match only value 
// console.log("the valeu of firstNumber==secondNumber",firstNumber==secondNumber)
// //2.===  match data types or value
// console.log("the valeu of firstNumber===secondNumber",firstNumber===secondNumber)
// //3.<    lessthan of then value
// console.log("the valeu of firstNumber>secondNumber",firstNumber>secondNumber)
// //4.>    graterthen of the value
// console.log("the valeu of firstNumber<secondNumber",firstNumber<secondNumber)
// //5.<=    lessthan and equal of then value
// console.log("the valeu of firstNumber>=secondNumber",firstNumber===secondNumber)
// //6.>=    graterthen and equal of the value
// console.log("the valeu of firstNumber<=secondNumber",firstNumber===secondNumber)


// //Lpgical operator
// //1. &&  AND 
// //2. ||  OR
// //3. !   NOT


// //1. &&  AND 
// var a=5
//  console.log("the value of a is less then 50 and grater then 4",a<50 && a>4)
// var b=47
// console.log("the value of a is less then 50 and grater then 45",b<50 && b>45)
// //2. ||  OR
// var a=67
// console.log("the value of a is less than 100 and grater than 50",a<100 ||a>50)
// var grade="A"
// var isPassed=grade=="A"||grade=="B"||grade=="C"
// console.log("the value of isPassed",isPassed)
// //3. !   NOT
// var isRainig=!true
// console.log("the value of isRainig",isRainig)

// // if eles
// var weeks=parseInt(prompt("enter weeks number"))
//  if (weeks==1){
// console.log("is Monday") 
//  }else if(weeks==2){
// console.log("is Tuesday") 
//  }else if(weeks==3){
// console.log("is Wednesday") 
//  }else if(weeks==4){
// console.log("is Thirsdat") 
//  }else if(weeks==5){
// console.log("is Friday") 
//  }else if(weeks==6){
// console.log("is Saturday") 
//  }else if(weeks==7){
// console.log("is Sunday") 
//  }
// else{
//     console.log("is not valid weeks")
// }
// SwitchAS?
// let wee kNumber=parseInt(prompt("enter week number"))

// switch(weekNumber){
//     case 1:
//         console.log(" Today is monday")
//     break;
//        case 2:
//         console.log(" Today is tuesday")
//     break
//     case 3:
//         console.log(" Today is wednesday")
//     break
//     case 4:
//         console.log(" Today is thirsday")
//     break
//     case 5:
//         console.log(" Today is friday")
//     break
//     case 6:
//         console.log(" Today is saturday")
//     break
//     case 7:
//         console.log(" Today is sunday")
//     break

//     default:
//         week="is not valid week number "
// }
// //loop 
// //1.while loop
// //2.do while loop
// //3.for loop

// // 1.while loop
// var i=1
// while(i<=5){
//     console.log("the value of i in while loop",i)
// i++
// }
// //2.do while loop
// var i=0
// do{
// console.log(i)
// i++
// }while(i<=5)
// //3.for loop
// for(i=0;i<=5;i++){
//     console.log("the value of for loop",i)
//     if (i==3){
//         console.log("is value",i)
//     }
// else if(i==5){
// console.log("the value of i",i)
// }
// }

// //Array

// var city0="Karachi"
// var city1="Lahore"
// var city2="Islamabad"
// var city3="Quetta"
// var city4="Peshawar"
// var city5="Faisalabad"
//  var citiesName=["Karachi","Lahore","Islamabad","Quetta","Peshawar","Faisalabad"]
//     console.log("first name", citiesName[0])
//     console.log("first name", citiesName[1])
//     console.log("first name", citiesName[2])
//     console.log("first name", citiesName[3])
//     console.log("first name", citiesName[4])
//     console.log("first name", citiesName[5])

//     var num=[10,20,30]
// console.log("num",num)
// console.log("num[0]" ,num[0])
// console.log("num[1]" ,num[1])
// console.log("num[2]" ,num[2])


// var cities = [];

// for( var i =0;i < 3;i++){
// cities[i]=prompt("enter cities name")
// }
// for( var i=0;i<cities.length;i++){
//     console.log(cities[i])
// }



// for(var i=0;i<=5;i++){
//    let row=""
//    for(var j=0;j<=i;j++){
//         row+="*"
// }
// console.log(row,i)
// }



// //1.push
// //2.pop
// var array=["fsd","lhr","lsd","psh"]
// array.pop()
// console.log("array",array)

// var array=["fsd","lhr","lsd","psh"]
// array.push("sialk")
// console.log("array",array)
// //1.shift
// //2.unshift
// var array=["fsd","lhr","lsd","psh"]
// array.shift()
// console.log("array",array)

// var array=["fsd","lhr","lsd","psh"]
// array.unshift("dag")
// console.log("array",array)

// //1.splice
// //2.slice

// //1.splice
// var array=["fsd","lhr","lsc","psh","silk"]
// array.splice(1,3)
// console.log("array",array)


// //2.slice

// var array=["1","2","3","4","5"]
// var newArray=array.slice(1,3)
// console.log("newArray",newArray)

// //round
// var num=4.5
// var roundvalue=Math.round(num)
// console.log("round",roundvalue)

// //ceil
// var num=4.5
// var ceilValue=Math.ceil(num)
// console.log("ceil",ceilValue)

// //floor
// var num=4.8
// var floorvalue=Math.floor(num)
// console.log("floor",floorvalue)

// //random
// var randomValue=Math.random()
// console.log("random",randomValue)


// var sentence =
// "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them  to grasp their minds and motives in ways that they cannot grasp his.";
// var checkWord=sentence.indexOf("World War II")
// if(checkWord !==-1){
//     sentence=sentence.slice(0,checkWord)+"Second World War"+sentence.slice(checkWord +12)
//     console.log("update world",sentence)
    
// }
// var sentence =
// "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them  to grasp their minds and motives in ways that they cannot grasp his World War II,.";
// var newsentence=sentence.replaceAll("World War II","Second World War")
// console.log("update world",newsentence)

// var cleanCity=["karachi","fsd","sialkot"]
// var city=prompt("enter ur city name")
// var newCity=false
// for(var i=0;i<cleanCity.length;i++){
//     if(cleanCity[i]==city){
//         newCity=true
//     console.log("user clean  city",city)

//         break;
//     }
//     console.log("our clean city",city)
// }

// var food=prompt("Enter ur food name")
// switch(food){
//     case "biryani":
//         console.log("I am eating biryani",food)
//         break;
//     case "karahi":
//         console.log("I am eating karahi",food)
//         break;

//         default:
//         console.log("I am eating nothing",food)
// }
// var food=prompt("Enter ur food name")
// switch(food){
//     case "biryani":
//         case "pizza":  
//           case "burger":
//             console.log("its a food",food)
//             break;
//             default:
//             console.log("its not a food",food)
// }

// var day=prompt("Enter ur day name")
// switch(day){
//     case "monday":
//         console.log("today is monday and i am eating biryani",day)
//         break 
//         case "tuesday":
//             console.log("today is tuesday and i am eating karahi",day)
//             break
//             case "wednesday":
//                 console.log("today is wednesday and i am eating pizza",day)
//                 break
//                 default:
//                   console.log("today is not a valid day",day)
// }


// var num=prompt("enter number")
// if(num%2===0){
//     console.log("the number is even",num)
// }else{
//     console.log("the num is odd",num)
// }


// var num=prompt("Enter ur number")
// if(num%2===0){
// console.log(" not valid number",num)
// }else{
//     console.log(" valid number ",num)
// }


// var num=prompt("Enter ur number")
// if(num>10){
//     console.log(" the num is greater then 10 ",num)
// }else{
//     console.log("the num is less then 10",num)

// }


// var age=prompt("Enter ur age")
// if(age>=18){
//     console.log("you are eligible for vote",age)
// }
// else{
//     console.log("you are not eligible for vote",age)
// }


// var num=prompt("Enter ur number")
// if(num%2===0){
//     console.log("the number is even",num)
// }
// else{
//     console.log("the number is odd",num)
// }


// var num=prompt("Enter ur number")
// if(num==="12345"){
// console.log("login successful",num)
// }else{
// console.log("wrong password",num)
// }


// var num=prompt("Enter ur number")
// if(num>=50){
//     console.log("You are pass",num)
// }else{
//     console.log("You are fail",num)

// }


// var grade=prompt("Enter ur number")
// if(grade>="80"){
//     console.log("Your grade is A",grade)
// }else if(grade>="60"){
//     console.log("Your grade is B",grade)
// }else if(grade>="40"){
//     console.log("Your grade is C",grade)
// }else if(grade<"40"){
//     console.log("Your are fail",grade)
// }



// var age=+prompt("Enter ur age")
// var nationality=prompt("Enter ur nationality ")
// if(age>18 && nationality==="pakistani" ){
//     console.log("yr are eligible",age)
// }else{
//     console.log("yr are not eligible",age)
// }



// var week=prompt("Enter ur week")
// if(week=="sunday"){
//     console.log(" Today is weakend",week)
// }else{
//     console.log("Today is weekday",week)
// }


// var fruties=["apple","banana","orange","stobary","pinaple",]
// console.log("5 fruties",fruties)

// var fruties=["apple","banana","orange","stobary","pinaple",]
// fruties.splice(1,3)
// console.log("fruties",fruties)



// var city=["karachi","lahore","islamabad","peshawar","quetta",]
// city.push("FSD")
// console.log("city",city)
// city.pop()
// console.log("city",city)

//   var check=city.includes("lahore")
//   console.log("check",check)


// var num=[10,20,31,41,50]
// var sum=10+20+31+41+50
// console.log("num",sum)

// var num=[10,20,31,41,50]
// if(num%2==0){
//     console.log("the number is even",num)
// }else{
//     console.log("the number is odd",num)
// }
 

// var city=["karachi","lahore","islamabad","peshawar","quetta",]
// city.reverse()
// console.log("city",city)


// var city=[]
// if(city.length==0){
//     console.log("the array is empty",city)
// }else{
//     console.log("the array is not empty",city)
// }


// var city=["karachi","lahore","islamabad","peshawar","quetta",]
// if(city.includes("karachi")){
//     console.log("karachi is exist in the array",city)
// }else{
//     console.log("karachi is not exist in the array",city)
// }



// var city=["karachi","lahore","islamabad","peshawar","quetta",]
// if(city.includes("karachi")){
//     console.log("karachi has spacific value",city)
// }else{
//     console.log("karachi has not spacific value",city)
// }




// var num=prompt("Enter ur number")
// if(num%2===0){
//     console.log("the number is even",num)
// }
// else{
//     console.log("the number is odd",num)
// }

// var num=prompt("Enter ur number")
// if(num<0){
//     console.log("the number is negative",num)
// }else if(num>0){
//     console.log("the number is positive",num)
// }

// var num=prompt("Enter ur number")
// if(num%3==0 && num%5==0){
//     console.log("FizzBuzz",num)
// }else if(num%3==0){
//     console.log("Fizz",num)
// }else if(num%5==0){
//     console.log("Buzz",num)
// }


// var num=[1,2,3,4,5,6,7,8,9]
// num.pop()
// console.log("num",num)

// var num=[1,2,3,4,5,6,7,8,9]
// num.shift()
// console.log("num",num)


// var fruits=["apple", "banana", "mango", "orange"]
// fruits.includes("banana")
// console.log("found banana",fruits)



// var grades=prompt("Enter ur grade")
// if(grades>90){
//     console.log("Your grade is A+",grades)
// }else if(grades>=80){
//  console.log("Your grade is A",grades)
// }else if(grades>=70){
//     console.log("your grade is B",grades)
// }else if(grades>=60){
//     console.log("your grade is C",grades)
// }else{
//     console.log("you are fail",grades)
// }



// var num=[1,2,3,4,5,6,7,8,9,10]
// num.reverse()
// console.log(" reverse num",num)


// var num=[1,2,3,4,5,6,7,8,9,10];
// var count=0;
// for(var i=0;i<num.length;i++){
//     if(num[i]%2===0){
//         count++
//     }   
// }
// console.log("total even number",count)


// var names=["Ali","Ahmed","Ayesh","Sana","Hassa"]
// var count=0;
// for(var i=0;i<names.length;i++){
//     if(names[i].length===5){
//         count++
//     }
// }
// console.log("total names with 5 characters",count)

// var word=prompt("Enter ur word")
// if(word==="madam"){
//     console.log("the word is palindrome",word)
// }else if(word==="hello"){
//     console.log("the word is not palindrome",word)
// }


// var num=prompt("Enter ur number")
// var square=num*num
// console.log("the square of the number is",square)



// var num=[1,2,3];
// var count=0;
// for(var i=0;i<num.length;i++){
//     count=count+num[i]
// }
// console.log("the sum of the number is",count)

// var names=["Ali", "Ahmed", "Sara"]
// var check=
// names.includes("Ahmed")
// console.log(" Ahmed",check)


// var num=[0,1,2,0,3,0,4,5]
// var count=0;
// for(var i=0;i<num.length;i++){
//     console.log("the array has zero",count)
// }



// var sentence =
// "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, with the weird applicability available only to poetry and myth, the essential notion that the good gray wizard can understand the evil magi precisely because he is just enough like them  to grasp their minds and motives in ways that they cannot grasp his.";
// for(var i=0;i<sentence.length;i++){
//     if(sentence.slice(i,i+12)=="World War II"){
//         sentence=sentence.slice(0,i)+"Second World War"+sentence.slice(i+12)
// }
//     console.log("update world",sentence)
// }



// var text="My name is john and i am a student of computer science"
// alert("Do you want to replace text in " +text)
// var replace=prompt("Enter the word you want to replace")
// var replaceWith=prompt("Enter the word you want to replace with")
// var newtext=text.replace(replace,replaceWith)
// console.log("the new text is",newtext)



// var date=new Date()
// console.log(" date",date)
// var year=date.getFullYear()
// console.log("year",year)
// var month=date.getMonth()
// console.log("month",month)
// var day=date.getDate()
// console.log("day",day)
// var hours=date.getHours()
// console.log("hours",hours)


// // age calculation 
var userdate=prompt("Enter ur date of birth eg jun 10,1990")
var currentdate=new Date()
var birthdate=new Date(userdate)
var currentdate =currentdate.getTime()
var currentdateDob=birthdate.getTime()
var different=currentdate-currentdateDob
var age= different/1000/60/60/24/365
console.log("your age is",Math.floor(age))

// var currentdate =currentdate.()
// console.log("hours",currentdate)




