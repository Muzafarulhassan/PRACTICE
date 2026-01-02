
var calculator=document.getElementById("Calculation")
function Calculator(value){
    calculator.value += value
}
function clearDisplay(){
    calculator.value=""
}
function calculation(){
    calculator.value=eval(calculator.value)
}
function del(){
    calculator.value=calculator.value.slice(0, -1)
}
















