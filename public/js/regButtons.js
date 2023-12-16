const regBtn = document.querySelector(".reg");
const regForm = document.querySelector(".registration");

const authBtn = document.querySelector(".auth");
const authForm = document.querySelector(".authorization");


if (regBtn) {
  regBtn.addEventListener("click", () => {
  regForm.setAttribute("style", "display: block;");
  authForm.setAttribute("style", "display: none;");
});
}


if (authBtn) {
  authBtn.addEventListener("click", () => {
    authForm.setAttribute("style", "display: block;");
    regForm.setAttribute("style", "display: none;");
});
}



const closeBtn1 = document.querySelector(".cancel1");
const closeBtn2 = document.querySelector(".cancel2");


if (closeBtn1) {
  closeBtn1.addEventListener("click", () => {
    authForm.setAttribute("style", "display: none");
  regForm.setAttribute("style", "display: none");
})
}

if (closeBtn2) {
  closeBtn2.addEventListener("click", () => {
    authForm.setAttribute("style", "display: none");
  regForm.setAttribute("style", "display: none");
})
}
