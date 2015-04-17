$(document).ready(function(){

    var curVal = 0,
        newVal = 0,
        finalVal = 0;

    var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
    var number = "";
    var newnumber = "";
    var operator = "none";
    var totaldiv = $("#total");
    totaldiv.text("0");

    $("#numbers a").not("#clear,#clearall").click(function(){
        newVal = $(this).text();
        curVal = totaldiv.text();
        totaldiv.text(newVal);
        // operations(curVal, newVal, operator);
        return false;
    });

    $("#equals").not("#clear,#clearall").click(function(){
        operations(curVal, newVal, operator);
        return false;
    });





    $("#operators > a").not("#equals").click(function(){
        operator = $(this).text();
        return false;
    });

    $("#clear,#clearall").click(function(){
        if ($(this).attr('id') == 'clear'){
            newVal = 0;
            totaldiv.text(curVal);
            operator="none";

        } else{
            curVal = 0,
            newVal = 0,
            finalVal = 0;
            operator = "none";
            totaldiv.text("0");
        }
        return false;
    });

});


function operations(curVal, newVal, operator){

    curVal = parseInt(curVal);
    newVal = parseInt(newVal);
    console.log(curVal, newVal);
    switch(operator){
        case 'none':
            finalVal= curVal;
            break;
        case "+":
            finalVal = mathADD(curVal, newVal);
            console.log(finalVal);
            break;
        case "-":
            finalVal = mathSubtract(curVal, newVal);
            console.log(finalVal);
            break;
        case "*":
            finalVal = mathMultiply(curVal, newVal);
            console.log(finalVal);
            break;
        case "/":
            finalVal = mathDivide(curVal, newVal);
            console.log(finalVal);
            break;
    }


    $("#total").text(finalVal);


}

function mathADD(curVal, newVal){
    finalVal = curVal + newVal;
    return finalVal;
}
function mathSubtract(curVal, newVal){
    finalVal = curVal - newVal;
    return finalVal;
}
function mathMultiply(curVal, newVal){
    finalVal = curVal * newVal;
    return finalVal;
}
function mathDivide(curVal, newVal){
    finalVal = curVal / newVal;
    return finalVal;
}






