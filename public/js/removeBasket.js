const mainPage = document.querySelector(".mainPage");

if(mainPage) {
    mainPage.addEventListener('click', async e =>{
        if(e.target.classList.contains('delBasketBtn')) {
            const delBasketBtn=e.target;
            const parentBasket = delBasketBtn.closest('.basketName')

            const {id} = parentBasket.dataset
           console.log(id, '-------------');

            const response = await fetch(`/api/baskets/${id}`, {
                method: "DELETE",
            })
            const data = await response.json()

            if(data.message ==='success') {
                parentBasket.remove()
            }
        }
    })
}