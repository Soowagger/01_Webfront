// 1. 숫자 클릭 시 번호 출력 기능 만들기



const numbers = document.querySelectorAll(".pad")

const keyBox = document.querySelector(".number-area")

const header = document.querySelector(".header");


keyBox.addEventListener("click", e => {
    
   
   

    console.log(e);

    switch(e.target.innerText) {
        case '1' : header.innerText += 1; break;
        case '2' : header.innerText += 2; break;
        case '3' : header.innerText += 3; break;
        case '4' : header.innerText += 4; break;
        case '5' : header.innerText += 5; break;
        case '6' : header.innerText += 6; break;
        case '7' : header.innerText += 7; break;
        case '8' : header.innerText += 8; break;
        case '9' : header.innerText += 9; break;
        case '#' : header.innerText += "#"; break;
        case '0' : header.innerText += 0; break;
        case '*' : header.innerText += "*"; break;
    }
});


document.querySelector("#plusBtn").addEventListener("click", () => {
    
    const span = document.createElement("span");
    span.classList.add("phoneList");
    span.innerText = header.innerHTML
    
   

    const listBox = document.querySelector(".listBox");

    const listCon = document.createElement("div")

    listBox.append(listCon);

    
    listCon.append(span);

    const starBtn = document.createElement("span");
    starBtn.classList.add("starButton");
    starBtn.innerHTML = "&times";
    
    
    listCon.append(starBtn);
    

    

    const span2 = document.createElement("span")
    span2.classList.add("xButton");
    span2.innerHTML ="&times";

    listCon.append(span2);

});