const input1 = document.querySelector("div:nth-child(1) input:nth-child(4)");
const input2 = document.querySelector("div:nth-child(2) input:nth-child(4)");
const input3 = document.querySelector("div:nth-child(3) input:nth-child(4)");

const fruit = document.querySelectorAll(".fruit");
const input = document.querySelectorAll(".row input:nth-child(4)")
const price = document.querySelectorAll(".row span")
const result = document.getElementById("result");

document.getElementById("btn").addEventListener("click", () => {
       
    let count = 0;
    let sum = 0;

    for(let i=0; i < fruit.length; i++) {
                      
        if(fruit[i].checked) {
            
            count += Number(input[i].value);

            sum += Number(input[i].value) * Number(price[i].innerText);

        }
    }

    result.innerText = `사과 ${input1.value}개 바나나 ${input2.value}개 메론${input3.value}개 / 총합 : ${count}개, ${sum}원`

})