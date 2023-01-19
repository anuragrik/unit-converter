/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let calcInitial, calcFinal
const inpVal=document.getElementById("inp-btn")
inpVal.value=""
let convert=document.getElementById("conv-btn")
let outputLen=document.getElementById("len-tab")
let outputVol=document.getElementById("vol-tab")
let outputMass=document.getElementById("mass-tab")
convert.addEventListener("click", function(){
    console.log(typeof(inpVal.value))
    if(isNaN(parseInt(inpVal.value))){
        outputMass.textContent=" "
        outputLen.textContent=" "
        outputVol.textContent=" "
    }else{
        parFunc(inpVal, "meters", "feet")
        parFunc(inpVal, "liters", "gallons")
        parFunc(inpVal, "kilos", "pounds")
    }
})
function parFunc(input, initial, final){
    if(final==="feet"){
        calcInitial= (input.value*3.281).toFixed(3)
        calcFinal= (input.value/3.281).toFixed(3)
        let text=`
        ${input.value} ${initial} = ${calcInitial} ${final} | ${input.value} ${final} = ${calcFinal} ${initial} 
    `
    outputLen.textContent=text
    }else if(final==="gallons"){
        calcInitial= (input.value*0.264).toFixed(3)
        calcFinal= (input.value/0.264).toFixed(3)
        let text=`
        ${input.value} ${initial} = ${calcInitial} ${final} | ${input.value} ${final} = ${calcFinal} ${initial} 
    `
    outputVol.textContent=text
    }else if(final==="pounds"){
        calcInitial= (input.value*2.204).toFixed(3)
        calcFinal= (input.value/2.204).toFixed(3)
        let text=`
        ${input.value} ${initial} = ${calcInitial} ${final} | ${input.value} ${final} = ${calcFinal} ${initial} 
    `
    outputMass.textContent=text
    }
}
