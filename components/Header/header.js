class Header {
   handleOpenShoppingPage() {
      shoppingPage.render()
   }

   render(count){
      const html = `
      <div class="header-container">
         <div class="header-counter" onclick="headerPage.handleOpenShoppingPage();">
            🛒 ${count}
         </div>
      </div>
      `
      ROOT_HEADDER.innerHTML = html
   }
}

const headerPage = new Header()

const productsStore = localStorageUtil.getProducts()

headerPage.render(productsStore.length)