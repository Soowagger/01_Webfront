// break 확인
function check1() {
    // 1 ~ 10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i = 1; i <= 10; i++) {
        console.log(i);

        if(i == 5) break; // 1줄 짜리면 {} 생략 가능
    }
}

// 무한 반복하는 while문 멈추기
function check2() {
    
    let i = 1;
    
    // 10 초과 시 멈춤
    while(true) {
        // true일 때 반복 수행하는 코드
        console.log("i : ", i++);

        if(i > 10) break;
    }
}

// continue 확인하기
function check3() {

    // 1부터 20까지 출력. 단, 3의 배수는 건너뛰기
    for(let i = 1; i <= 20; i++) {
        
        // 3의 배수인 경우
        if(i % 3 == 0) continue;

        // 3의 배수인 경우 아래 코드는 수행하지 않음
        console.log("i : ", i);
    }
}

/*
1 ~ 30까지 1씩 증가하며 출력
단, 홀수 또는 10의 배수는 건너뛰기
*/
function check4() {
    for(let i = 1; i <= 30; i++) {
        if(i % 2 == 1 || i % 10 == 0) continue

        console.log("i : ", i);
    }
}


/*
0 ~ 9까지 5줄 출력
- 각 줄에서 4의 배수는 건너뛰기
- 3번째 줄 출력 후 멈추기

01235679
01235679
01235679
*/
function check5() {

    for(let i = 1; i <= 5; i++) {
        
        let print = "";
        for(let x = 0; x <= 9; x++) {

            // 0을 제외한 4의 배수인 경우
            if(x != 0 && x % 4 == 0) continue;
            print += x; 
        }
        
        console.log(print);       
        
        
        // 3번째 줄 출력 후 멈춤
        if(i == 3) break;
    }
}

// prompt 창에 1 ~ 100 사이 숫자를 입력해주세요
// 값 넣었을 때 [UP] or [DOWN] / count : 횟수
// 취소 눌렀을 때 "게임 포기"
// 숙제
function startGame() {
    let input;
    console.log(Math.floor(Math.random() * 101));
    
    while(input !== null) {
        
        input = Number(prompt("1 ~ 100 사이 숫자를 입력해주세요"));
        const random = Math.floor(Math.random() * 101);
        let count = 0;
        
        if(input > 0 || input < 101) {
            if(input > random) {
                alert(`[UP] / count : ${count++}`);
            }

            if(input < random) {
                alert(`[DOWN] / count : ${count++}`);
            }
            
            if(input == random) {break;}
            
            } else {
                alert("1 ~ 100사이 숫자만 입력하세요");
            }
        } 
}
