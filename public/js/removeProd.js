const basketPage = document.querySelector('.BasketPage')

if(basketPage){
    basketPage.addEventListener('click', async e=>{
        if(e.target.classList.contains("delProdBtn")) {
            const delProdBtn = e.target
          const parentProd= delProdBtn.closest('.inbasket')

          const {id}= parentProd.dataset
        
          const response = await fetch(`/api/products/${id}`, {method:'DELETE'})
          const data = await response.json()

          if (data.message ==='success') {
           parentProd.remove()
            
          }
        }
    })
}