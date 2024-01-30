const size = document.getElementById("size");
const color = document.getElementById("color");
const container = document.querySelector(".container");
const text = document.getElementById("content");



// 등록 결과물
const result = document.getElementById("result");

document.getElementById("apply").addEventListener("click", () => {
    
    //const span = document.createElement("span");
    //span.innerHTML = text.value

    text.style.fontSize = `${size.value}px`
    text.style.color = color.value

});



document.getElementById("registration").addEventListener("click", () => {
   
    const span = document.createElement("span");
    const div = document.createElement("div");
    
    span.style.fontSize = text.style.fontSize
    span.style.color = text.style.color
    
    span.innerHTML = text.value;
    
    result.append(div)
    div.append(span);
    
    text.value = "";
    // span.style.fontSize = `${size.value}px`
    // span.style.color = color.value

});