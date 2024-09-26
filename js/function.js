
function getValueByInputField(id){
    const inputValue = parseFloat(document.getElementById(id).value)
    return inputValue;
}

function getValueByTextField(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}

function getInnerText(id){
   return document.getElementById(id).innerText;
}



