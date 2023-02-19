function calcShipping(sum, min, shipping) {
    let productsSum = sum; 
    let freeShippingMinSum = min; 
    let shippingPrice = shipping; 

    let shippingSum ;
    if (productsSum == 0 || productsSum >= freeShippingMinSum) {
    shippingSum = 0;
    } 
    else if ((productsSum > 0) & (productsSum < freeShippingMinSum)) {
    shippingSum = shippingPrice;
    }
    
    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum;
    let discountMinSum = min; 
    let discountPart = discount; 

    let discountSum;
    if (productsSum >= discountMinSum){
    discountSum = (discountPart / 100 * productsSum);
    } else {
    discountSum = 0;
    
}

    return discountSum;

}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);


    let totalSum ;

    totalSum = productsSum;
    totalSum -= discountSum;

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice);

    totalSum += shippingSum;

    let freeShipping = shippingSum == 0;


    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
