//to display number
function displayNumber(num){
    result.value+=num
}
function clearText(){
    result.value=''
}
function lastDigit(){
    result.value=result.value.slice(0,-1)
}
function calculation(){
    result.value=eval(result.value)
}