const menuItem = document.querySelectorAll(".menu-item");
const cart = document.getElementById("cart");
const total = document.getElementById("total");

let count = 0;
let countSum = 0;

function addToCart(menu, price) {
    console.log(menu, price);
    
    // cart 안에 div 설정
    const cartItme = document.createElement("div");
    cartItme.classList.add("cart-item");
    cart.append(cartItme);

    // span1 부분 메뉴명(menuList) 넣기
    const menuList = document.createElement("span")
    menuList.innerText = menu
    
    cartItme.append(menuList);

    // span2 부분 +, 수량, - 넣기
    const quantity = document.createElement("span");
    quantity.classList.add("quantity");
    
    cartItme.append(quantity);

    const plus = document.createElement("button");
    plus.innerText = "+"
    
    const minus = document.createElement("button");
    minus.innerText = "-"

    quantity.append(plus);
    quantity.append(count);
    quantity.append(minus);



    // span3 부분 x 버튼 넣기
    const deleteBtn = document.createElement("span")
    
    cartItme.append(deleteBtn);
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerHTML = "&times"

    // 
    plus.addEventListener("click", count => {
       count 
    });

    console.log(countSum);
    //

    
    total.addEventListener("click", () => {
        
    });
}   



