// 1. 추가 버튼 클릭 시 박스, x 모양 버튼 생성 하기
const container = document.querySelector(".container");

document.querySelector("#add").addEventListener("click", () => {
    
    // input과,span이 들어갈 공간 만들어주기 == box
    const box = document.createElement("div");
    box.classList.add("row");
    container.append(box);
    
    // 그 공간(box)에 input 넣어주기
    const input = document.createElement("input");
    input.classList.add("input-number");
    input.type = "number";
    box.append(input);

 
    // input 옆에 들어갈 버튼 역할을 수행해줄 span 생성
    // 생성한 span을 공간(box)에 넣어주기
    const span = document.createElement("span");
    span.classList.add("remove-row")
    span.innerHTML = "&times;" // X자 모양
    box.append(span);

    // X자 모양 span 클릭 시 input 삭제
    span.addEventListener("click", () => {
        input.remove();
        span.remove(); // X자도 남아있으면 안되기에 삭제
    });    
});


// 2. 계산 버튼 클릭 시 입력창에 입력한 숫자의 합 알림창 띄우기

document.querySelector("#calc").addEventListener("click", () => {
    
    const num = document.querySelectorAll(".input-number");
    let sum = 0;

    for(let i=0; i < num.length; i++) {   

    sum += Number(num[i].value);
        
    }

    alert(`모든 input 요소의 합은 ${sum}입니다.`);
});


// ---------------강사님 풀이-----------------------


const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calc");
// const container = document.querySelector(".container");

addBtn.addEventListener("click", () => {


    // 1. div 요소 생성
    const row = document.createElement("div"); // <div></div>

    // 2. 요소에 class 추가하기
    row.classList.add("row"); // <div class="row"></div>

    // 3. input 요소 생성하기
    const input = document.createElement("input"); // <input>

    // 4. type="number" 추가하기
    input.setAttribute("type", "number"); // <input type="number">

    // 5. 클래스 "input-number"
    input.classList.add("input-number"); // <input type="number" class="input-number">

    /*
    요소명.setAttribute("class", "test") 
    요소명.setAttribute("class", "test1") 
    -> 이렇게 작성해도 되지만, 결과는 "test1"만 적용됨
        why? class 2개 이상 작성 시 덮어쓰기가 되는 문제가 있음
    -> 요소명.classList.add는 추가의 개념이기 때문에 classList.add를 사용해야함!!
    */

    // 6. span 요소 생성하기
    const span = document.createElement("span"); // <span></span>

    // 7. span 태그에 클랙스 "remove-row" 추가
    span.classList.add("remove-row"); // <span class="remove-row"></span>

    // 8. 내용으로 &times; 추가 (innerHTML 사용)
    span.innerHTML = "&times;"; // <span class="remove-row">&times;</span>

    // -------- 조립하기 --------
    
    // 9. div.row 요소에게 자식으로 input, span 추가
    row.append(input);
    row.append(span);

    /* 아래에 형태로 들어갔다고 생각하면 됨

    <div class="row">
        <input type="number" class="input-number">
        <span class="remove-row">&times;</span>
    </div>

    */

    // 10. 완성된 div.row를 container의 마지막 자식으로 추가하기
    container.append(row);


    // **************************************************

    // 클릭된 x 버튼의 부모 요소를 제거

    // 1. 만들어지는 x버튼(span)에 이벤트 리스너 추가
    
    span.addEventListener("click", e => {

        // 2. 현재 이벤트가 발생한 요소(클릭된 x버튼)의
        // 부모 요소를 선택

        const parent = e.target.parentElement; // == div.row
        
        // 3. 부모 요소를 제거하기
        parent.remove();
    });

});


calcBtn.addEventListener("click", () => {

    // 1) 모든 .input-number 얻어오기
    const numbers = document.querySelectorAll(".input-number");
    
    //console.log(numbers);

    // 2) for문으로 모든 요소 접근하여
    // 작성된 값(value)을 얻어와
    // 숫자로 변경(Number())한 후
    // 합계 저장 변수 sum에 누적

    let sum = 0;
    for(let i=0; i < numbers.length; i++) {
        sum += Number(numbers[i].value);
    }

    // 3) for문 끝나면 alret로 결과 출력
    alert("결과 : " + sum);
});