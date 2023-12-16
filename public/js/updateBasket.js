if (updateBasketForm) {
  updateBasketForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name } = e.target;
    const basketId = updateBasketForm.dataset.id;
    const response = await fetch(`/api/baskets/${basketId}`, {
      method: "PUT",
      body: JSON.stringify({ name: name.value }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data.message === "success") {
      console.log(data.name, "LLLLLLLLLL");
      const basketLink = document.querySelector(
        `.a[data-id='${basketId}']`
      );
      basketLink.innerText = `${data.name}`
      // data.????
    //   console.log(basket, "jjjjjjjjjjj");
    //   const newElement = document.createElement(data.html);
    //   console.log(newElement);
    //   basket.replaceWith(newElement);
    }
  });
}
