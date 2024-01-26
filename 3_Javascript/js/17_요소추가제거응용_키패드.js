// 1. 숫자 클릭 시 번호 출력 기능 만들기



const numbers = document.querySelectorAll(".pad")

const keyBox = document.querySelector(".number-area")

const header = document.querySelector(".header");



// 키패드 내 클릭 시 이벤트 발생 설정
keyBox.addEventListener("click", e => {
    
   
   

    console.log(e);

    // 클릭한 요소의 이너텍스트가 1이면 헤더 부분에 출력 누적되도록 설정
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

// 1. 추가 버튼 클릭 시 수행 이벤트 설정
document.querySelector("#plusBtn").addEventListener("click", () => {
    

    // 클릭하여 얻은 번호를 목록으로 가져오는 span 생성
    const span = document.createElement("span");
    span.classList.add("phoneList");
    
    // 번호를 클릭하여 누적된 번호가 추가 버튼 클릭 시
    // 오른쪽 전화 번호 목록으로 출력됨
    span.innerText = header.innerHTML
    
    // 추가 버튼 후 공란 만들기
    header.innerHTML = "";

    // 전체 공간 생선
    const listBox = document.querySelector(".listBox");

    // 출력이 넘어올 공간 생성
    const inputBox = document.createElement("div")
    
    
    // 전체 공간에 출력이 넘어올 출력 공간 넣어주기
    listBox.append(inputBox);

    // 출력이 넘어오는 값을 출력 공간에 넣어주기
    // listBox == 전체 공간, inputBox == 목록 출력 공간
    inputBox.append(span);



    // 2. 즐겨찾기 특수기호 생성
    const star = document.createElement("span");
    star.classList.add("star-btn");
    star.innerHTML = "&#9734;";
    
    // 즐겨찾기 특수기호 출력 공간에 넣어주기
    inputBox.append(star);
    
    // 즐겨찾기 클릭시 별의 모양과 출력된 번호의 색상 변경 이벤트 추가
    star.addEventListener("click", (e) => {

        switch(e.target.innerHTML) {
            case '☆' : star.innerHTML = "&#9733;", span.style.color = "red", star.style.color="red"; break;
            case '★' : star.innerHTML = "&#9734;", span.style.color = "black", star.style.color="black"; break;

            default : return;
        }

    });


    // 3. X 모양의 특수기호 생성
    const remove = document.createElement("span")
    remove.classList.add("remove-btn");
    remove.innerHTML ="&times";

    inputBox.append(remove);



    
    // X버튼 클릭 시 부모인 inputBox(출력 공간) 삭제
    remove.addEventListener("click", e => {
        const parent = e.target.parentElement;
        
        parent.remove();        
    });

    // 초기화 버튼 클릭 시 출력 공간인 inputBox 삭제 및 
    // 입력 중이던 번호 삭제되게끔 설정
    document.querySelector("#refreshBtn").addEventListener("click", () => {
        
        inputBox.remove();
        header.innerText = "";        
    });
    
});

