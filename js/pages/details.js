// importing products array
import { products } from "../data/products.js";

// getHash() function

function getHash() {
  const hash = window.location.hash.replace("#", "");
  return Number(hash);
}

// defining ErrorBanner()
function ErrorBanner() {
  return `<hgroup>
          <h2>PetId is not found</h2>
          <p>Look again, this pet id is not present in the db. Go back to home</p>
            </hgroup>`;
}

// defining featuresList()
function featuresList(feature) {
  return `<li>${feature}</li>`;
}

// defining ProductDetails()
function ProductDetails(details) {
  return `<article>
          <hgroup>
          <h1>${details.name}</h1>
          <p>${details.category}</p>
          </hgroup>
          <p>${details.details}</p>
          <footer>
          <h3>Features</h3>
          <p>${details.features.map(featuresList).join("")}</p>
          <a href="/">back</a>
          </footer>
          </article>`;
}

// render function
export default function render() {
  const productId = getHash();

  // function isProductWithId
  function isProductWithId(product) {
    return product.id === productId;
  }
  const product = products.find(isProductWithId);

  if (!product) {
    document.getElementById("app").innerHTML = ErrorBanner();
  }

  const productDetails = ProductDetails(product);
  document.getElementById("app").innerHTML = productDetails;
}
