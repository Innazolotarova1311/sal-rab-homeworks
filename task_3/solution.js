function renderCartItem(item) {
const product = item;


 let itemCountText = "";
 itemCountText = itemCountText + product.count;
 itemCountText = itemCountText + `*`;
 itemCountText = itemCountText + product.price;
 itemCountText = itemCountText + `₽=`;
 let Sum = product.count * product.price;
 itemCountText = itemCountText + Sum;
 itemCountText = itemCountText + `₽`
    

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
