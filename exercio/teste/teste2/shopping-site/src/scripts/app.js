// Este arquivo contém a lógica JavaScript para o site de compras.

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const cart = [];

    // Função para exibir produtos
    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>Preço: R$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            `;
            productList.appendChild(productItem);
        });
    }

    // Função para adicionar produto ao carrinho
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            alert(`${product.name} foi adicionado ao carrinho!`);
        }
    }

    // Evento de clique para adicionar produtos ao carrinho
    productList.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    // Exemplo de lista de produtos
    const products = [
        { id: 1, name: 'Produto 1', price: 29.99 },
        { id: 2, name: 'Produto 2', price: 49.99 },
        { id: 3, name: 'Produto 3', price: 19.99 }
    ];

    displayProducts(products);
});