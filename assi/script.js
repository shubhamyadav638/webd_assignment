const categoryCheckboxes = document.querySelectorAll('.filter-category input[type="checkbox"]');
const priceRangeSlider = document.getElementById('price-range');
const priceValueSpan = document.getElementById('price-value');
const products = document.querySelectorAll('.product');

// Update price value display when slider changes
priceRangeSlider.addEventListener('input', function() {
  priceValueSpan.textContent = `Rs. ${this.value}`;
});

// Filter products on checkbox change or slider change
function filterProducts() {
  const selectedCategories = Array.from(categoryCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
  const selectedPrice = priceRangeSlider.value;

  products.forEach(product => {
    const productCategory = product.dataset.category;
    const productPrice = parseFloat(product.dataset.price);

    if ((selectedCategories.length === 0 || selectedCategories.includes(productCategory)) &&
        productPrice <= selectedPrice) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Attach event listeners to filter elements
categoryCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterProducts);
});

priceRangeSlider.addEventListener('input', filterProducts);

// Initial filter (show all products)
filterProducts();