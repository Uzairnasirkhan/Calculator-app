function addinput(num){
    var inputfield = document.getElementById("inputfield");
    inputfield.value += num
}


function calc(){
    var inputfield = document.getElementById("inputfield");
    inputfield.value = eval(inputfield.value)
    
}


function allclear(){
    var inputfield = document.getElementById("inputfield");
    inputfield.value = ""
   
}

function singleclear(){
    var inputfield = document.getElementById("inputfield");
    inputfield.value = inputfield.value.slice(0,-1)
   
}