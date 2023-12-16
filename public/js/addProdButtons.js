const addProdForm = document.querySelector(".AddProdForm");
const addProdBtn = document.querySelector(".addProdBtn");
const cancel5 = document.querySelector(".cancel5");


if (addProdBtn) {
  addProdBtn.addEventListener("click", () => {
  addProdForm.setAttribute("style", "display: block;");
});
}

if (cancel5) {
  cancel5.addEventListener("click", () => {
  addProdForm.setAttribute("style", "display: none;");
});
}



