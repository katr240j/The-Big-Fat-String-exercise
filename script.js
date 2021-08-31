"use strict";

let operator = "";
let result
let input ;
let output ;

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMLoaded");
    document.querySelector("#calculate").addEventListener("mousedown", readField);
});


function readField() {

input = document.querySelector("#input").value;

const lastPng = input.lastIndexOf(".");
const lastJpg = input.lastIndexOf(".");
const isPng = input.substring(lastPng + 1);
const isJpg = input.substring(lastJpg + 1);
let splitInput = input.split("-" + " ");
operator = document.querySelector("#operator").value;


    if (operator === "opg1") {
        console.log("opg1");

        result = input[0].toUpperCase()+ input.substring(1).toLowerCase();
        console.log(result);
       writeResult();
    }else if (operator === "opg2") {
        console.log("opg2");
        result = input.substring(0, input.indexOf(' '));
console.log(`The first name of ${input} is _${result}_`);
writeResult();
    } else if (operator === "opg3") {
        console.log("opg3");
        result = input.substring(0, input.indexOf(' ')).length;
console.log(result.length);
writeResult();
    } else if (operator === "opg4") {
        console.log("opg4");
        

        result = input.substring(input.indexOf(' ')+1,input.lastIndexOf(' '));
    
        console.log(`the second name of ${input} is _${result}_`);
     
writeResult();
    }    else if (operator === "opg5") {
        console.log("opg5");

        if (isJpg === "jpg" || isPng === "png") {
            console.log("true");
       
            result = "YES filename includes .jpg or .png";
            writeResult();
          } else {
            result = "WRONG WRONG WRONG";
            console.log(result);
            writeResult();
          }
       

    }   else if (operator === "opg6") {
        console.log("opg6");

        result = input.replaceAll(input, `*`).repeat(input.length);
        writeResult();
    

    }  else if (operator === "opg7") {
        console.log("opg7");
    
result = input.substring(0,1) + input[1].toUpperCase() + input.substring(2); 
    
writeResult();
    }  else if (operator === "opg8") {
        console.log("opg8");


if (input.includes("-" + " "){
    console.log("");
    result = splitInput.substring(0, 1).toUpperCase() + splitInput.substring(1);
    writeResult();
}   else    {
    result = input;
    writeResult();
}

}
        
    
    

    function writeResult() {
        console.log("writeResult");
    
        document.querySelector("#result").value = result;
    

    
    }
