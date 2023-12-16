const addProdForma = document.querySelector("#addProdForm");

if (addProdForma) {
  addProdForma.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { name, description, price, img } = event.target;
    const form = event.target.closest(".form");

    const { id } = form.dataset;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          description: description.value,
          price: price.value,
          img: img.value,
          basketId: +id,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      
      if (data.message === "success") {
        const basketPage = document.querySelector(".BasketPage");
        basketPage.insertAdjacentHTML("afterbegin", data.html);
        addProdForma.reset();
      } else {
        console.log(data.error);
      }
    } catch (error) {
      // console.error(error);
    }
  });
}
