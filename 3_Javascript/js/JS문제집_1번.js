document.querySelector(".container").addEventListener("click", (e) => {
    console.log(e);

    const result = document.querySelector("#result");

    switch(e.target.innerText) {
        case '1' : result.innerText += 1; break;
        case '2' : result.innerText += 2; break;
        case '3' : result.innerText += 3; break;
        case '4' : result.innerText += 4; break;
        case '5' : result.innerText += 5; break;
        case '6' : result.innerText += 6; break;
        case '7' : result.innerText += 7; break;
        case '8' : result.innerText += 8; break;
        case '9' : result.innerText += 9; break;

        default : return;
        
    }
    document.querySelector("#reset").addEventListener("click", () => {
        result.innerText = "";
    });
});






