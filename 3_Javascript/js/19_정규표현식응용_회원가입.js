
// 아이디 : 값이 변했을 때
// 1) 영어 소문자로 시작하고 영어 대/소문자, 숫자, - , _ 로만 
//      이루어진 6~14글자 사이 문자열인지 검사
// 2) 형식이 일치할 경우 입력창의 배경색을 springgreen으로 변경

// 1. 아이디 유효성 검사
const inputId = document.getElementById("inputId")

inputId.addEventListener("keyup", (e) => {
    const regExp = /^[a-z][a-zA-Z0-9-_]{6,14}$/;

    // if(e.target.value.length == 0) {

    // }

    if(regExp.test(e.target.value)) {
        inputId.style.backgroundColor = "springgreen"
    } 
}); 


// 2. 비밀번호, 비밀번호 확인 유효성 검사

const inputPW = document.getElementById("inputPw")
const inputPwConfirm = document.getElementById("inputPwConfirm")



inputPwConfirm.addEventListener("keyup", () => {

    const span = document.getElementById("pwResult");    
    
    if(inputPW.value.length == 0) {
        alert("비밀번호를 입력해주세요");
        inputPW.focus();
        
        return;
    }


    if(inputPW.value == inputPwConfirm.value) {
        span.innerText = "비밀번호 일치"
        span.style.color ="green"
    } else {
        span.innerText = "비밀번호 불일치"
        span.style.color ="red"
    }
});

// 3. 이름 유효성 검사
const inputName = document.getElementById("inputName");

inputName.addEventListener("keyup", (e) => {
    const regExp = /^[가-힣]{2,5}$/;
    const span = document.getElementById("nameResult");
    
    if(regExp.test(e.target.value)) {
        span.innerText = "정상입력";
        span.style.color = "green";
    } else {
        span.innerText = "한글만 입력하세요";
        span.style.color = "red"
    }
});





// 회원가입 버튼 클릭 시 : validate() 함수를 호출하여 
// 성별이 선택 되었는지, 
// 전화번호가 형식에 알맞게 작성되었는지 검사

// 4. 회원가입 버튼
const signUp = document.getElementById("signUp");
const gender = document.getElementsByName("gender");
const inputTel = document.getElementById("inputTel");
const regExpTel = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
const form = document.getElementById("form");

signUp.addEventListener("click", () => {

    
    if(validate()) {
        form.preventDefault();
    }
    
});

function validate() {
    if(gender[0].checked == false && gender[1].checked == false) {
        alert("성별을 선택해주세요");
        

    } else if(regExpTel.test(inputTel.value) == false) {
        alert("전화번호의 형식이 올바르지 않습니다");
        
    }
}




// 성별이 선택되지 않은 경우
