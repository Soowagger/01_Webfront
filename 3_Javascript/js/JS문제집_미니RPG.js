const player = {
    name: "",
    job: "",
    gender: "",
    level: 1,
    hp: 100,
    attack: 10,
    defense: 5,
    exp: 0,
    gold: 0,
    weapon: null,
    armor: null
};
  

const monster = {
    name: "Goblin",
    hp: 20,
    attack: 8,
    defense: 2,
    expReward: 15,
    dropRate: 0.5
};


const items = {
    sword: { name: "검", attackBonus: 5, price: 20 },
    shield: { name: "방패", defenseBonus: 3, price: 15 },
    potion: { name: "물약", hpBonus: 20, price: 10 }
};


//const crtInfo = document.querySelector(".crt-info");

// 캐릭터 정보 내 span 태그 불러오기
const info1 = document.querySelectorAll(".crt-info-1");
const info2 = document.querySelectorAll(".crt-info-2");


// 캐릭터 정보 클릭 시 이벤트 설정
document.getElementById("crt-btn").addEventListener("click", () => {
    
    // 이름 입력 프롬프트창 변수 설정
    const crtName = prompt("이름을 입력하세요");
    
    // 성별_직업 입력 프롬프트창 변수 설정
    const crtInput = prompt("남자_전사 / 남자_마법사 / 여자_전사 / 여자_마법사 중 선택하세요");
    
    // 이름 입력창이 공백이 아니라면 위에 설정해두었던
    // player 변수의 name = ""; 값에 입력창에 입력한 이름값 대입
    if(crtName.valueOf().length !== 0) {
        player.name = crtName.valueOf();
    } 
    
    // 성별_직업 입력창이 공백이 아니라면
    // player 변수의 gender = "";,  job=""; 값에
    // 성별(0, 2)_직업(3,5) 문자열 추출하여 대입
    if(crtInput.valueOf().length !== 0) {
        player.gender = crtInput.valueOf().substring(0, 2);
        player.job = crtInput.valueOf().substring(3, 5);
    }
    
    // info1의 경우 11개 인덱스를 가진 동일 클래스 객체
    // info1안에 innerText 내용에 따라 입력해두었던 player 변수의 값 대입
    for(let i=0; i < info1.length; i++) {
        switch(info1[i].innerText) {
            case '이름:' : info2[0].innerHTML = player.name; break;
            case '직업:' : info2[1].innerHTML = player.job ; break;
            case '성별:' : info2[2].innerHTML = player.gender; break;
            case '레벨:' : info2[3].innerHTML = player.level; break;
            case 'HP:' : info2[4].innerHTML = player.hp; break;
            case '공격력:' : info2[5].innerHTML = player.attack; break;
            case '방어력:' : info2[6].innerHTML = player.defense; break;
            case '경험치:' : info2[7].innerHTML = player.exp; break;
            case '골드:' : info2[8].innerHTML = player.gold; break;
            case '무기:' : info2[9].innerHTML = player.weapon; break;
            case '방어구:' : info2[10].innerHTML = player.armor ; break;
        }
    }  

    // src="/images/남자_전사.png"
    // src="/images/남자_마법사.png"
    // src="/images/여자_전사.png"
    // src="/images/여자_마법사.png"

    // 성별_직업 입력창에 입력한 값에 따라 사진 불러오기
    switch(crtInput.valueOf()) {
        case '남자_전사' : document.querySelector(".crt-img").innerHTML = "<img src='/images/남자_전사.png'>"; break;
        case '남자_마법사' : document.querySelector(".crt-img").innerHTML = "<img src='/images/남자_마법사.png'>"; break;
        case '여자_전사' : document.querySelector(".crt-img").innerHTML = "<img src='/images/여자_전사.png'>"; break;
        case '여자_마법사' : document.querySelector(".crt-img").innerHTML = "<img src='/images/여자_마법사.png'>"; break;
    }
});

// ------------------- 전투 시작 ----------------------------------

document.getElementById("fight-btn").addEventListener("click", () => {
    
    // 캐릭터가 이전에 생성되지 않았다면 "캐릭터가 생성되지 않았습니다" 경고창 출력
    if(info2[0].innerText.length == 0 || info2[1].innerText.length == 0 || info2[2].innerText.length == 0) {
        alert("캐릭터가 생성되지 않았습니다");
    }
    

    // 전투는 1회당 플레이어의 공격 1번, 몬스터의 공격 1번이 수행되어야 함.
    //  데미지는 (공격하는대상의 공격력 - 공격받은대상의 방어력) 으로 계산해야 함.
    
    /* ------------- 몬스터 정보
    const monster = {
    name: "Goblin",
    hp: 20,
    attack: 8,
    defense: 2,
    expReward: 15,
    dropRate: 0.5
    */
    
    /* ----------------- player 정보
    name: "",
    job: "",
    gender: "",
    level: 1,
    hp: 100,
    attack: 10,
    defense: 5,
    exp: 0,
    gold: 0,
    weapon: null,
    armor: null
    */
    
    // <div class="fight-info"> 출력 공간 얻어오기
    const divFight = document.querySelector(".fight-info");
    
    // 전투 메시지 span 생성
   
   

    // 몬스터 피통 - 데미지
    
    
    let playerDemage = info2[5].innerHTML - monster.defense;
    let monsterDemage = monster.attack - info2[6].innerHTML;
;
    // let monsterHp = 20;
    let mHp = monster.hp
    let pHp = player.hp
    let sum1 = 0;
    let sum2 = 0;
    let playerFight = null;
    let monsterFight = null;


    for(let i=1; mHp >= sum1; i++) {
    
    sum1 += playerDemage * i
    

    playerFight = document.createElement("span");
    
    
    playerFight.classList.add("playerFight" + i);
    divFight.append(playerFight);

    playerFight.innerHTML = 
    `${info2[0].innerText}이(가) ${monster.name}을(를) 공격했습니다. 데미지 ${playerDemage}를 입혔습니다. (남은 체력 = ${mHp-playerDemage*i})` ;
    

    monsterFight = document.createElement("span");
    monsterFight.classList.add("monsterFight" + i);
    divFight.append(monsterFight);

    monsterFight.innerHTML =
    `${monster.name}이(가) ${info2[0].innerText}을(를) 공격했습니다. 데미지 ${monsterDemage}를 입혔습니다.(남은 체력 = ${pHp-monsterDemage*i})`;
    
    info2[4].innerText = pHp-monsterDemage*i
    
    
    }
    // 경험치 로그
    const exp = document.createElement("span");
    exp.innerText = `몬스터를 처치했습니다. 경험치 ${monster.expReward} 획득!`
    divFight.append(exp)
    
    // 전투마다 얻은 경험치 축적
    player.exp += monster.expReward

    // 캐릭터 경험치 추가
    info2[7].innerText = player.exp

    // 골드 이벤트 추가
    const gold = document.createElement("span");
    gold.innerText = "추가로 5원을 획득하였습니다."
    divFight.append(gold)
    player.gold += 5;
    info2[8].innerText = player.gold

    // 드랍율

    const random = Number(Math.floor(Math.random()* 51));
    console.log(monster.dropRate*10);
    
    // 여기까지
    if(random < monster.dropRate*10) {
        alert("아이템 획득");
    }
}); 
    

// ------------------------- 아이템 구매 ----------------------

/*
const items = {
    sword: { name: "검", attackBonus: 5, price: 20 },
    shield: { name: "방패", defenseBonus: 3, price: 15 },
    potion: { name: "물약", hpBonus: 20, price: 10 }
};
*/

// div 얻어오기
const itemListBox = document.querySelector(".item-list-box");
const itemList = document.querySelectorAll(".item-list");



// items의 값들 배열로 만들기
const arr = new Array(3);
const arr1 = items.sword
const arr2 = items.shield
const arr3 = items.potion

arr[0] = arr1;
arr[1] = arr2;
arr[2] = arr3;


// item-list li에 내용 추가
itemList[0].innerHTML = 
`sword(${arr1.name}) <br> 
attackBonus(공격보너스): ${arr1.attackBonus} <br>
price(가격): ${arr1.price}`

itemList[1].innerHTML = 
`sword(${arr2.name}) <br> 
defenseBonus(방어보너스): ${arr2.defenseBonus} <br>
price(가격): ${arr2.price}`

itemList[2].innerHTML = 
`sword(${arr3.name}) <br> 
hpBonus(체력보너스): ${arr3.hpBonus} <br>
price(가격) ${arr3.price}`

document.getElementById("buy-btn").addEventListener("click", () => {

});
