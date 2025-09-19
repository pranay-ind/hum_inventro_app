import { products } from "../data/products.js";

function productCard(product) {
  return `<article>
    <h3>${product.name}</h3>
    <p>${product.category}</p>
    <a href="product#${product.id}">Details</a>
    </article>`;
}

// defining products
function Products() {
  return `<h2>Products</h2>
  ${products.map(productCard).join("")}
  `;
}

// render function
export default function render() {
  document.getElementById("app").innerHTML = Products();
}
