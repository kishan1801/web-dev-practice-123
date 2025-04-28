function renderProducts(products) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; 
  
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.desc}</p>
        <h3>${product.price}</h3>
        <button class="add-to-cart">Add</button>
      `;
      container.appendChild(card);
    });
  
    setUpCartCounter(); 
  }
  
  function setUpCartCounter() {
    let cartCount = 0;
    const buttons = document.querySelectorAll(".add-to-cart");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const productName = this.parentElement.querySelector("h2").textContent;
        showToast(`${productName} added to cart!`);
        cartCount++;
        document.getElementById("cart-count").textContent = cartCount;
      });
    });
  }
  
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
  
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }
  

  function searchProduct() {
    const searchInput = document.getElementById("search");
  
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const cards = document.querySelectorAll(".card");
      let hasResults = false;
  
      cards.forEach((card) => {
        const productName = card.querySelector("h2").textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
          card.style.display = "block";
          hasResults = true;
        } else {
          card.style.display = "none";
        }
      });
  
      if (!hasResults) {
        showToast("No products found");
      }
    });
  }
  

  window.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    searchProduct();
  });
  