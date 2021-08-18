// phone plus minus function
/*function updatePhoneNumber(caseIncrease) {
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;
    if (caseIncrease) {
        phoneNumber = parseInt(phoneNumber) + 1;
    }
    else if (phoneNumber > 0) {
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;
    // update phone total
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;
};

//  case plus minus function
function updateCaseNumber(caseIncrease) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (caseIncrease) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
};

// handle phone 
// phone plus event handler
document.getElementById('phone-plus').addEventListener('click', function () {
    updatePhoneNumber(true);
});

// phone minus event handler
document.getElementById('phone-minus').addEventListener('click', function () {
    updatePhoneNumber(false);
});

// handle phone cases
// case plus event handler
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});
// case minus event handler
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
});
*/

//   new system function

//  case plus minus function
function updateProductNumber(product, price, caseIncrease) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (caseIncrease) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total 
    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
};

// handle phone 

// phone plus event handler
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
// phone minus event handler
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

// handle phone cases

// case plus event handler
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
// case minus event handler
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});