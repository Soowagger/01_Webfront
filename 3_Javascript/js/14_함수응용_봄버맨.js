let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수


// addEventListener("이벤트종류", 함수(이벤트가 발생했을 때 수행할 기능))
// 전달인자 2개
document.addEventListener("keydown", function(e) {
    const man = document.getElementById("man");

    console.log(e);
    switch(e.key) {
        case 'ArrowRight' : xindex += 30; break;
        case 'ArrowLeft' : xindex -= 30; break;
        case 'ArrowUp' : yindex -= 30; break;
        case 'ArrowDown' : yindex += 30; break;
        case 'x' : 
        const box = document.getElementById("container");
        box.innerHTML += `<img src="/images/boom.png" 
        style="transform: translate3d(${xindex}px, ${yindex}px, 0);
        position: absolute;">`;
        console.log(xindex);
        console.log(yindex);
        
        break;
        
        default : return;
    }
    
    man.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;

});



