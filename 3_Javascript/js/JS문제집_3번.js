document.getElementById("createBtn").addEventListener("click", () => {
    
    const lottoBoard = document.getElementById("lottoBoard");  

    
const random = Number(Math.floor(Math.random()* 46));

    const number = document.createElement("div");
    
    number.classList.add("number")
    
    number.innerHTML = random

    lottoBoard.append(number);

    
    number.addEventListener("click", (e) => {
        
        switch(e.target.className) {
            case 'number' : number.classList.add("active"); return;
            case 'number active' : number.classList.remove("active"); return;
            
            default : return;
        }
        
    });

});