//Declaring Global Variables / Functions
let ER
function displayResult(){
    document.getElementById('hexDim').style.display='none'
    document.getElementById('sqrDim').style.display='none'
    document.getElementById('obeDim').style.display='none'
    document.getElementById('resDim').style.display='none'
    document.getElementById('results').style.display='block'
    document.getElementById('reportER').innerHTML=`THE EQUIVALENT ROUND IS ${ER} INCHES`  
}
// Event Listeners for Shape Selection
document.getElementById('hexPick').onclick=function(){
    document.getElementById('shapeSelect').style.display='none'
    document.getElementById('hexDim').style.display='block'
}
document.getElementById('sqrPick').onclick=function(){
    document.getElementById('shapeSelect').style.display='none'
    document.getElementById('sqrDim').style.display='block'
}
document.getElementById('obePick').onclick=function(){
    document.getElementById('shapeSelect').style.display='none'
    document.getElementById('obeDim').style.display='block'
}
document.getElementById('resPick').onclick=function(){
    document.getElementById('shapeSelect').style.display='none'
    document.getElementById('resDim').style.display='block'
}
// Event Listeners for Dimensions
document.getElementById('hexCalc').onclick=function(){
    if(document.getElementById('hexT').value===''){
        alert('Please fill out the form.')
    }else{
    ER=(Number(document.getElementById('hexT').value))*1.1
    displayResult()
    }
}
document.getElementById('sqrCalc').onclick=function(){
    let sqrW=Number(document.getElementById('sqrW').value),
    sqrT=Number(document.getElementById('sqrT').value)
    if(document.getElementById('sqrW').value===''||document.getElementById('sqrT').value===''){
        alert('Please fill out the form.')
    }else if(sqrW===sqrT){
        ER=sqrT*1.25
        displayResult()
    }else if(sqrW>sqrT){
        ER=sqrT*1.5
        displayResult()
    }else if(sqrT>sqrW){
        ER=sqrW*1.5
        displayResult()
    }
}
document.getElementById('obeCalc').onclick=function(){
    let obeD=Number(document.getElementById('obeD').value),
    obeL=Number(document.getElementById('obeL').value),
    obeT=Number(document.getElementById('obeT').value)
    if(document.getElementById('obeD').value===''||document.getElementById('obeL').value===''||document.getElementById('obeT').value===''){
        alert('Please fill out the form.')
    }else if(obeL<obeT){
        ER=obeT*1.5
        displayResult()
    }else if(obeL>obeD){
        ER=obeT*2
        displayResult()
    }
}
document.getElementById('resCalc').onclick=function(){
    let resD=Number(document.getElementById('resD').value),
    resT=Number(document.getElementById('resT').value)
    if(document.getElementById('resD').value===''||document.getElementById('resT').value===''){
        alert('Please fill out the form.')
    }else if(resD<2.5){
        ER=resT*2.5
        displayResult()
    }else if(resD>2.5){
        ER=resT*3.5
        displayResult()
    }
}
//Reset Page
document.getElementById('reset').onclick=function reload(){
    document.location.reload()
}