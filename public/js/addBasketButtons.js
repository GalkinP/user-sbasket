// ВЗАИМОДЕЙСТВИЕ С ФОРМОЙ НА ДОБАВЛЕНИЕ КОРЗИНЫ

const addBasketBtn = document.querySelector(".addBasketButton");
const addBasket = document.querySelector(".addBasket");
const cancel3 = document.querySelector(".cancel3");

if (addBasketBtn) {
  addBasketBtn.addEventListener("click", () => {
    addBasket.setAttribute("style", "display: block;");
    
  });
}
if (cancel3) {
  cancel3.addEventListener("click", () => {
    addBasket.setAttribute("style", "display: none;");
  });
}

// ВЗАИМОДЕЙСТВИЕ С ФОРМОЙ НА ИЗМЕНЕНИЕ КОРЗИНЫ

const updateBasketBtns = document.querySelectorAll(`.updateBasketBtn`);
const updateBasketForm = document.querySelector(`.updateBasket`);
const cancel = document.querySelector(".cancel4");

updateBasketBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateBasketForm.setAttribute("style", "display: block;");
    updateBasketForm.dataset.id = btn.dataset.id;
  });
});

if (cancel) {
  cancel.addEventListener("click", () => {
    updateBasketForm.setAttribute("style", "display: none;");
  });
}
