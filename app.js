const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', function(){
  const rnd = Math.ceil(Math.random()*1000);
  const name = `Product-${rnd}`;
  const product = { name };

  products.push(product);
  renderProducts();
});

const products = [
  { name: 'foo' },
  { name: 'bar' },
  { name: 'bazz' },
  { name: 'quq' }
];

function renderProducts(){
  const html = products.map(function(product){
    return `
      <li>${ product.name }</li>
    `;
  }).join('');
  ul.innerHTML = html;
}


renderProducts();

