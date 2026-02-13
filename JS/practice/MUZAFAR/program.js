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


var num=prompt("enter number")
if(num%2===0){
    console.log("the number is even",num)
}else{
    console.log("the num is odd",num)
}














































































