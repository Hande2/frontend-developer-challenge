//Function that feeds the product list with the cards

const injectProjects = ({ products, nextPage }) => {

    let content = '';

    if (products) {
        for (product of products) {
            content += `
                <div class="card">
                    <div class="card-image">
                        <img src="http:${product.image}"/>
                    </div>
                    <h2 class="card-name">${product.name}</h2>
                    <p class="card-description">${product.description}</p>
                    <p class="card-oldPrice">De: R$${product.oldPrice.toFixed(2)}</p>
                    <h3 class="card-price">Por: R$${product.price.toFixed(2)}</h3>
                    <p class="card-installments">ou ${product.installments.count}x de R$${product.installments.value.toFixed(2)}</p>
                    <button class="card-button">Comprar</button>
                </div>
            `;
        }
    }

    const cardContainer = document.querySelector('.products-list');
    cardContainer.innerHTML += content;

    //Feeding Product List with New Cards
    const cardsButton = document.querySelector('.next-products');
    cardsButton.onclick = () => getProductsList(nextPage);
};