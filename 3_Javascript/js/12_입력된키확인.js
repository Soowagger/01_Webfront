// 입력된 키를 눌렀을 때 불 들어오게 만들기

// 문자열.toLowerCase() : 영어를 모두 소문자로 변경 (A -> a)
// 문자열.toUpperCase() : 영어를 모두 소문자로 변경 (a -> A)


// -------------------- 내 풀이----------------------------------
const keyBox = document.querySelectorAll(".key");


const keyQ = document.querySelector(".key-box > div:nth-of-type(1)");
const keyW = document.querySelector(".key-box > div:nth-of-type(2)");
const keyE = document.querySelector(".key-box > div:nth-of-type(3)");
const keyR = document.querySelector(".key-box > div:nth-of-type(4)");


document.addEventListener("keydown", function(e) {

    if(e.keyCode == 81) {
        keyQ.style.backgroundColor = "green"
    } else if(e.keyCode == 87) {
        keyW.style.backgroundColor = "green"
    } else if(e.keyCode == 69) {
        keyE.style.backgroundColor = "green"
    } else if(e.keyCode == 82) {
        keyR.style.backgroundColor = "green"
    }
});

document.addEventListener("keyup", function(e) {

    if(e.keyCode == 81) {
        keyQ.style.backgroundColor = "white"
    } else if(e.keyCode == 87) {
        keyW.style.backgroundColor = "white"
    } else if(e.keyCode == 69) {
        keyE.style.backgroundColor = "white"
    } else if(e.keyCode == 82) {
        keyR.style.backgroundColor = "white"
    }
});


// --------------------------------------------------------

// *** 강사님 풀이 ***


// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 문서(화면 전체)에서 키가 눌러지는걸 감지했을때
document.addEventListener("keydown", function(e) {
    
    let idx; // 인덱스 값을 저장할 변수

    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
    switch(e.key.toLocaleLowerCase()) {
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;

        default : return; // 함수 종료
    }

    // idx번호와 일치하는 keys 배열 요소의 배경 변경
    keys[idx].style.backgroundColor = "deepPink"
});


// 키를 떼면 배경색 흰색으로 되돌리기
document.addEventListener("keyup", function(e) {
   
    let idx; // 인덱스 값을 저장할 변수

    // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
    switch(e.key.toLocaleLowerCase()) {
        case 'q' : idx = 0; break;
        case 'w' : idx = 1; break;
        case 'e' : idx = 2; break;
        case 'r' : idx = 3; break;

        default : return; // 함수 종료
    }

    // idx번호와 일치하는 keys 배열 요소의 배경 변경
    keys[idx].style.backgroundColor = "white"
});




