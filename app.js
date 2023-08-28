const ul = document.querySelector('ul');


let products = [];

function renderProducts(){
  const html = products.map(function(product){
    console.log(product);
    return `
      <li>
        <h2>${ product.name }</h2>
        $${product.suggestedPrice}
        <p>
        ${product.description}
        </p>
      </li>
    `;
  }).join('');
  ul.innerHTML = html;
}

async function fetchProducts(){
  const response = await fetch('https://www.acme-api.com/api/products');
  const json = await response.json();
  products = json;
  renderProducts();
}

fetchProducts();
