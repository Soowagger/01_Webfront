const input = document.querySelector("input");

const btn = document.querySelector("#btn");

const container = document.querySelector("#container");


btn.addEventListener("click", () => {
    
    for(let i=0; i < Number(input.value); i++){


    const plusInput = document.createElement("input");
    plusInput.classList.add("input-number");
    plusInput.type = "number"
    container.append(plusInput)
    }


});

document.querySelector("#sumBtn").addEventListener("click", () => {

    const numbers = document.querySelectorAll(".input-number")
    

    let sum = 0;
    
    for(let i=0; i < numbers.length; i++) {
        sum += Number(numbers[i].value);
    } 
    
    const result = document.querySelector("#result");
    
    result.innerText = sum
    
});
