function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки
    let shippingSum;
    if (productsSum == 0 || productsSum >= freeShippingMinSum) {
        shippingSum = 0;


    } else {
    }
    if (productsSum > 0 && productsSum < freeShippingMinSum) {
        shippingSum = shippingPrice;
    }
    
        return shippingSum;
}
 // Задание №2.2. Рассчитать скидку
function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах
    let discountSum  // создайте переменную discountSum
    if (productsSum >= discountMinSum) {  // если productsSum больше или равно discountMinSum
        discountSum = (discountPart / 100 * productsSum);
        
         // то присвойте discountSum значение discountPart процентов от productsSum,
    } else {
        discountSum = 0; // иначе присвойте discountSum значение 0
    }

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);
     // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum;// создайте переменную totalSum

    totalSum = productsSum;// присвойте totalSum значение productsSum
    totalSum = (totalSum - discountSum);// уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!


    totalSum = (totalSum + shippingSum);// прибавьте к totalSum значение shippingSum

    let freeShipping;// создайте переменную freeShipping
    (shippingSum == 0) ? freeShipping = true : freeShipping = false; // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
