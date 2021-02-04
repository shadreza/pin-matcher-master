function hideTheContent (passedId){
    document.getElementById(passedId).style.display='none';
}
function showTheContent (passedId){
    document.getElementById(passedId).style.display='block';
}
hideTheContent('trialsLeft');
hideTheContent('pinNotMatchedNotification');
hideTheContent('pinMathcedNotification');
function inactiveButton (passedId){
    document.getElementById(passedId).value='0';
}
function activateButton (passedId){
    document.getElementById(passedId).value='1';
}
inactiveButton('submitButton');
function getRandom4DigitNumbers(){
    var genereatedNumber= parseInt(Math.random()*10000);
    var digitsOfGeneratedNumber = Math.ceil(Math.log10(genereatedNumber));
    if(digitsOfGeneratedNumber==4){
        return genereatedNumber;
    }
    else{
        getRandom4DigitNumbers();
    }
}
function updateGenereatedPinDisplay(passedDataToSetAsDisplayPin){
    document.getElementById('generatedPinDisplay').value = passedDataToSetAsDisplayPin+'';
}
document.getElementById('generatePinButton').addEventListener('click',function(){
    var fourDigitPin = getRandom4DigitNumbers();
    updateGenereatedPinDisplay(fourDigitPin);
    activateButton('submitButton');
    hideTheContent('pinNotMatchedNotification');
    hideTheContent('pinMathcedNotification');
})
function matchPins(){
    var generatedPin = document.getElementById('generatedPinDisplay').value;
    var inputtedPin = document.getElementById('inputDisplay').value;
    if(generatedPin=='' || inputtedPin==''){
        return false;
    }
    if(generatedPin==inputtedPin){
        return true;
    }
    return false;
}
function buttonClicked(passedId){
    hideTheContent('pinNotMatchedNotification');
    hideTheContent('pinMathcedNotification');
    var buttonBeenClicked = document.getElementById(passedId);
    if(passedId=='submitButton'){
        if(buttonBeenClicked.value=='0'){
            alert('Submit Button Disabled Becasue No Pin Been Generated!\n\nGenerate The Pin First!');
        }
        else{
            if(matchPins()){
                hideTheContent('trialsLeft');
                showTheContent('pinMathcedNotification');
                document.getElementById('remainingTrialsNumber').innerText=3;
            }
            else{
                var remainingNumberOfTurnsLeftNode = document.getElementById('remainingTrialsNumber');
                remainingNumberOfTurnsLeftNode.innerText--;
                showTheContent('trialsLeft');
                showTheContent('pinNotMatchedNotification');
                if(remainingNumberOfTurnsLeftNode.innerText==0){
                    alert('You Have Run Out Of Trials!\n\nGoodBuy...');
                    window.location.href = "https://quran.com/";
                    return;
                }
                document.getElementById('inputDisplay').value="";
                document.getElementById('generatedPinDisplay').value="";
            }
        }
    }
    else if(passedId=='button-C'){
        document.getElementById('inputDisplay').value="";
    }
    else if(passedId=='button-<'){
        var inputDisplayNode = document.getElementById('inputDisplay');
        var textOfinputDisplayNode = inputDisplayNode.value;
        textOfinputDisplayNode = textOfinputDisplayNode.substring(0,textOfinputDisplayNode.length-1);
        inputDisplayNode.value = textOfinputDisplayNode;
    }
    else{
        var inputDisplayNode = document.getElementById('inputDisplay');
        var textOfinputDisplayNode = inputDisplayNode.value;
        textOfinputDisplayNode = textOfinputDisplayNode + passedId[passedId.length-1];
        inputDisplayNode.value = textOfinputDisplayNode;
    }
}
document.getElementById('button-7').addEventListener('click',function(){
    buttonClicked('button-7');
})
document.getElementById('button-8').addEventListener('click',function(){
    buttonClicked('button-8');
})
document.getElementById('button-9').addEventListener('click',function(){
    buttonClicked('button-9');
})
document.getElementById('button-4').addEventListener('click',function(){
    buttonClicked('button-4');
})
document.getElementById('button-5').addEventListener('click',function(){
    buttonClicked('button-5');
})
document.getElementById('button-6').addEventListener('click',function(){
    buttonClicked('button-6');
})
document.getElementById('button-1').addEventListener('click',function(){
    buttonClicked('button-1');
})
document.getElementById('button-2').addEventListener('click',function(){
    buttonClicked('button-2');
})
document.getElementById('button-3').addEventListener('click',function(){
    buttonClicked('button-3');
})
document.getElementById('button-0').addEventListener('click',function(){
    buttonClicked('button-0');
})
document.getElementById('button-C').addEventListener('click',function(){
    buttonClicked('button-C');
})
document.getElementById('button-<').addEventListener('click',function(){
    buttonClicked('button-<');
})
document.getElementById('submitButton').addEventListener('click',function(){
    buttonClicked('submitButton');
})


