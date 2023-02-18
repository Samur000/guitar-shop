class Shopping {
   handleCloseShoppingPageclose() {
      ROOT_SHOPPING.innerHTML = ''
      sumCatalog = 0
   }

   render() {
      const productsStore = localStorageUtil.getProducts()
      let htmlCatalog = ''
      let sumCatalog = 0

      CATALOG.forEach(({ id, name, img, price }) => {
         // sumCatalog = 0
         if (productsStore.indexOf(id) !== -1) {
            htmlCatalog += `
               <tr>
                  <td class="shopping-element__name">⚡ ${name}</td>
                  <td class="shopping-element__price">${price.toLocaleString()} USD</td>
               </tr>
            `
            sumCatalog += price
         }
      })


      const html = `
         <div class="shopping-container">
            <table>
               ${htmlCatalog}
               <tr>
                  <td class="shopping-element__name">💥 Сумма</td>
                  <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
               </tr>
            </table>
            <div class="close__btn" onclick="shoppingPage.handleCloseShoppingPageclose()">
               ❌
            </div>
         </div>
      `
      ROOT_SHOPPING.innerHTML = html
   }
}

const shoppingPage = new Shopping()