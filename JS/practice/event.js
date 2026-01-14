var a=90;
var b=8;// declaration and initialization   var b=declaration + initialization=b=8
        console.log("the value of a ",a)
        console.log("the value of b ",b)
var sum =a+b// 90+8=98
        console.log("the value of sum ",sum)
var sub =a-b
        console.log("the value of sub ",sub)
        var mul=a*b
        console.log("the value of mul ",mul)
var div=a/b
        console.log("the value of div ",div)
var mod=a%b
        console.log("the value of mod ",mod)
    // data types 3
    // string ""
    // number 35656346
    // boolean true/false

    var Name="john doe" //string
    console.log("the value of name ",Name)
    var age=43//number
    console.log("the value of age ",age)
    var isMarried=true//boolean
    console.log("the value of isMarried ",isMarried)
    
    // variables and data types 
    //variables types =2
    //initilization and declaration
    //types of operators =3
    //arithmetic operators + - * / %
    //assignment operators = += -= *= /= %=
    //comparison operators == === != !== > < >= <=

    

var a=10;
var b=10;
var c=10;
var x=a+b+c
 a=20;
console.log("the value of x is  ",a)
//opetraters
///arithmetic operators

var firstNumber=10;
var secondNumber=10;
var thirdNumber=10;
 var sum=firstNumber+secondNumber+thirdNumber
 console.log("the value of sum is ",sum)
 var sub=firstNumber-secondNumber
 console.log("the value of sub is ",sub)
 var mul=firstNumber*secondNumber                               
        console.log("the value of mul is ",mul)
       //prefix increment ,++x,--x//pre means phala
       //postfix increment x++,x--//post means baad me
       //++a,--a,a++,a--
       var a=1
       var b=(++a)+(--a)+(++a)+(--a)+(++a)
        console.log("the value of b is ",b)
               var B=(a++)+(a--)+(++a)+(--a)+(--a)
        console.log("the value of B is ",B)
        //comaprison operators
        
var firstNumber=10;
var secondNumber="100";


console.log("the value of firstNumber==secondNumber is ",firstNumber==secondNumber)
console.log("the value of firstNumber===secondNumber is ",firstNumber===secondNumber)
console.log("the value of firstNumber<secondNumber is ",firstNumber<secondNumber)
console.log("the value of firstNumber>secondNumber is ",firstNumber>secondNumber)
console.log("the value of firstNumber<=secondNumber is ",firstNumber<secondNumber)
console.log("the value of firstNumber>=secondNumber is ",firstNumber>=secondNumber)
console.log("the value of firstNumber!=secondNumber is ",firstNumber!=secondNumber)
console.log("the value of firstNumber!==secondNumber is ",firstNumber!==secondNumber)
//logical operators
//  1.AND &&
//  2.OR ||
//  3.NOT !
// AND operater
// true && true=true
// true && false=false
// false && true=false
// false && false=false
 var a=49;
 console.log("the value of a is less then 50 and grater then 40",a<50 && a>40)

 var b=20
 console.log("the value of b is less then 50 and grater then 10",b>10 && b<50)
// OR operater
// true || true=true
// true || false=true
// false || true=true
// false || false=false
 var grade="B"
var isPassesd=grade=="A"||grade=="B"||grade=="C" //false||true||false=true
console.log("the value of isPassed is ",isPassesd)
var d=0;
var result=d>0||d<100||d==0//false||true||true=true
console.log("the value of result is ",result)
// NOT operater
// !true=false
// !false=true
 var isRainig=true
 var checkRainig=!isRainig//!true=false
 console.log("the value of checkRainig is ",checkRainig)
 var isSunny=false
 var checkSunny=!isSunny//!false=true
 console.log("the value of checkSunny is ",checkSunny) 
// propmt function
//  var userMarks=prompt("enter ur marks") //answer is in string ""
//  console.log("the value of userMarks is ",userMarks)
 //convert string to number

//   var userMark=parseFloat(prompt("enter ur  marks"))
//  console.log("the value of userMarks in number ",userMark)



//   var userMark=parseInt(prompt("enter ur in decimal marks"))
//  console.log("the value of userMarks in number ",userMark)

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

 var days=parseInt(prompt("enter week number"))
        if(days==1){
                console.log("monday")
        }else if(days==2){
         console.log("tuesday")       
        }else if(days==3){
         console.log("thursday")       
        }else if(days==4){
         console.log("friday")       
        }else if(days==5){
         console.log("saturday")       
        }else if(days==6){
         console.log("sunday")       
        }
        else{
                console.log("invalid week number ",days)
        }


        var userMarks=parseInt(prompt("enter ur marks"))
        if(userMarks>=80){
                console.log("A+ grade")
        }else if(userMarks>=70){
                console.log("A grade ")
        }else if(userMarks>=60){
                console.log("B grade ")
        }else if(userMarks>=50){
                console.log("C grade ")
        }else if(userMarks>=40){
                console.log("D grade ")
        }else{
                console.log(" you are fail because ur number is less then 40",userMarks)
        }
        

        // let number=56
        // console.log("check data type ",typeof number)
var check="3"
console.log("matching",check=="3")
console.log("matching",check===3) //mathcing type and value


// switch case 
//according to week


var weekNumber=3
let weeks=0;
switch(weekNumber){
        case 1:
         weeks ="monday" 
         break; 
          case 2:
         weeks ="tuesday" 
         break;
          case 3:
         weeks ="wed" 
         break;
          case 4:
         weeks ="thursday" 
         break;
        default:
                weeks="invalid week number"   

}


// loops 
// 1.while loop
//2. do while loop 
/// 3. for loop

//while loop
var i=1;
while(i<=5){
console.log("the value of i in while loop ",i)
i++
}  

// do while loop 


         

        

        

 







  





















