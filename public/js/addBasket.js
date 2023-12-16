const addBasketForm = document.querySelector("#addBasket");

if (addBasketForm) {
  addBasketForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name } = event.target;
   
    try {
      const response = await fetch("/api/baskets", {
        method: "POST",
        body: JSON.stringify({ name: name.value }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
    

      if (data.message === "success") {
//         const html = ` <a href="/baskets/${data.id}">
//                          <div class="basketName">
//                                ${data.name}
//   <div className="basketButtons">
//                   <button>удалить</button>
//                   <button>изменить</button>
//                 </div>
// </div></a>
// `;

        const mainPage = document.querySelector(".mainPage");
        mainPage.insertAdjacentHTML("beforeend", data.html);
        addBasketForm.reset();
      } else {
        console.log(data.error);
      }
    } catch (error) {
      // console.error(error);
    }
  });
}
