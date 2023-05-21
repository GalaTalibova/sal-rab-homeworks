function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message;
    message = productName;
    message = message + ' ';
    message = message + 'за';
    message = message + ' ';
    message = message + price;
    message = message + ' ';
    message = message + 'теперь в корзине!';
    console.log(message);
    return message;
}

function addInCartCountChange(value) {
    let oldValue = value;
    let newValue;
    newValue = oldValue;
    newValue = oldValue + 1;
    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    let newSum;
    newSum = oldSum + delta;
    let newSumText;
    newSumText = newSum + '₽';
    newSumText = `${newSum} ₽`;
    return newSumText;
}

