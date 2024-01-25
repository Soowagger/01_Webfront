// 입력한 색으로 변경

// ---------------------내 풀이---------------------------

const input = document.getElementsByClassName("color-input");
const box = document.getElementsByClassName("box")
const btn= document.getElementById("changeButton")

console.log(input);


btn.addEventListener("click", function() {
    
    for(let i = 0; i < input.length; i++) {
        box[i].style.backgroundColor = input[i].value;
    }
});

// ------------------------------------------------------

// *** 엔터키 입력시 만들어 봤음 ***
input[0].addEventListener("keyup", function(e) {
    if(e.key == "Enter") {
        box[0].style.backgroundColor = input[0].value;
    }
});
input[1].addEventListener("keyup", function(e) {
    if(e.key == "Enter") {
        box[1].style.backgroundColor = input[1].value;
    }
});
input[2].addEventListener("keyup", function(e) {
    if(e.key == "Enter") {
        box[2].style.backgroundColor = input[2].value;
    }
});
input[3].addEventListener("keyup", function(e) {
    if(e.key == "Enter") {
        box[3].style.backgroundColor = input[3].value;
    }
});
input[4].addEventListener("keyup", function(e) {
    if(e.key == "Enter") {
        box[4].style.backgroundColor = input[4].value;
    }
});


// -----------------------------------------------------