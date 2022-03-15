var num1=prompt("Enter 1st value");
var num2=prompt("Enter 2nd value");
var opr=prompt("Choose one operation +,-,*,/");
switch(opr){
    case "+": //If (opr=="+")
        var res= parseFloat(num1) + parseFloat(num2);  //parsefloat will convert string into number
        document.write(`${num1} + ${num2} = ${res}`);
        break;
        case "-": //If (opr=="-")
        var res= parseFloat(num1) - parseFloat(num2);
        document.write(`${num1} - ${num2} = ${res}`);
        break;
        case "*": //If (opr=="*")
        var res= parseFloat(num1) * parseFloat(num2);
        document.write(`${num1} * ${num2} = ${res}`);
        break;
        case "/": //If (opr=="/")
        var res= parseFloat(num1) / parseFloat(num2);
        document.write(`${num1} / ${num2} = ${res}`);
        break;
        default:document.write("Invalid values") //default is the state where input is missing
}