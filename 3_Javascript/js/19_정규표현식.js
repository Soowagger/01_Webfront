// 1. 정규 표현식 객체 생성 확인
document.getElementById("btn1").addEventListener("click", () => {
    
    // 정규표현식 객체 생성 방법 1) 
    const regExp1 = new RegExp("script");
                // "script와 일치하는 문자열이 있는지 검사하는 정규 표현식"

    // 정규표현식 객체 생성 방법 2) 
    const regExp2 = /java/;
                //"java와 일치하는 문자열이 있는지 검사하는 정규표현식"

    // ** 확인하기 **
    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "jsp(java server page)도 나중에 할겁니다.";
    const str3 = "java, java, java";

    console.log("regExp1.test(str1) : " + regExp1.test(str1));
    console.log(regExp1.exec(str1));
    
    console.log("regExp2.test(str2) : " + regExp2.test(str2));
    console.log(regExp2.exec(str2));
    
    console.log("regExp2.test(str3) : " + regExp2.test(str3));
    console.log(regExp2.exec(str3));
});

// 2. 메타 문자 확인하기
document.getElementById("btn2").addEventListener("click", () => {

    const div1 = document.getElementById("div1");
    
    // a(일반 문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple") + "<hr>"; // true
    div1.innerHTML += "/a/, price : " + regExp1.test("price") + "<hr>"; // false

    // [abcd] : 문자열 내에 a, b, c, d 중 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp2.test("apple") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/, ssbss : " + regExp2.test("ssbss") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/, qwerty : " + regExp2.test("qwerty") + "<hr>"; // false

    // ^(캐럿), $(달러) 자주씀
    // ^(캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/; // 문자열의 시작이 group인지 확인
    div1.innerHTML += "/^group/, group100 : " + regExp3.test("group100") + "<hr>"; // true
    div1.innerHTML += "/^group/, 100group : " + regExp3.test("100group") + "<hr>"; // false

    // $(달러): 문자열의 끝을 의미
    const regExp4 = /group$/; // 문자열의 끝이 group인지 확인
    div1.innerHTML += "/group$/, group100 : " + regExp4.test("group100") + "<hr>"; // false
    div1.innerHTML += "/group$/, 100group : " + regExp4.test("100group") + "<hr>"; // true
});



// 3. 이름 유효성 검사하기
document.getElementById("inputName").addEventListener("keyup", (e) => {  

    // 1) 결과 출력용 span 얻어오기
    const span = document.getElementById("inputNameResult");

    // 2) 한글 2~5글자 정규표현식 객체 만들기
    const regExp = /^[ㄱ-힣]{2,5}$/;
    // 시작과 끝이 모두 한글로 이루어진 2~5글자 사이 모든 한글
    
    // 3) 빈칸인지부터 검사 
    if(e.target.value.length == 0) {
        span.innerText = "";
        return;
    }

    // 4) 유효성 검사
    if(regExp.test(e.target.value)) {
        // 유효한 경우 
        span.innerText = "유효한 이름 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    } else {
        // 유효하지 않은 경우
        span.innerText = "이름 형식이 유효하지 않습니다."
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
});


// 4. 주민등록번호 유효성 검사하기
document.getElementById("inputPno").addEventListener("keyup", (e) => {
    const span = document.getElementById("inputPnoResult");

    if(e.target.value.length == 0) {
        span.innerText = "주민등록번호를 작성해주세요"
        span.classList.remove("confirm")
        span.classList.remove("error")
        return;
    }

    // 생년월일(6)-고유번호(7)
    const regExp = /^\d{6}\-\d{7}$/;
                        // - : \- 
/* 참고) /^\d{6}\-\d{7}$/ 상세 풀이
    /
    ^
    \d{6}
    \-
    \d{7}
    $
    /;
*/ 
    if(regExp.test(e.target.value)) {
        span.innerText = "유효한 주민등록번호 형식입니다.";
        span.classList.remove("error");
        span.classList.add("confirm");
    } else {
        span.innerText = "유효하지 않습니다.";
        span.classList.remove("confirm");
        span.classList.add("error");
    }
});
