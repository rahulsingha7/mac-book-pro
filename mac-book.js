//calculate total

function calculateTotal() {
    const price = document.getElementById('best-price');
    const bestPrice = parseInt(price.innerText);
    const memory = document.getElementById('memory-cost');
    const totalMemory = parseInt(memory.innerText);
    const storage = document.getElementById('storage-cost');
    const totalStorage = parseInt(storage.innerText);
    const delivery = document.getElementById('delivery-cost');
    const totalDeliveryCost = parseInt(delivery.innerText);
    const totalPrice = bestPrice + totalMemory + totalStorage + totalDeliveryCost;
    document.getElementById('total-price').innerText = totalPrice;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalPrice;
}


//memory cost
function updateMemoryCost(memoryCost) {
    const extraMemoryCost = document.getElementById('memory-cost');
    extraMemoryCost.innerText = parseInt(memoryCost);
    return extraMemoryCost;
}
document.getElementById('memory-8GB-button').addEventListener('click', function () {
    updateMemoryCost(0);
    calculateTotal();
})
document.getElementById('memory-16GB-button').addEventListener('click', function () {
    updateMemoryCost(180);
    calculateTotal();
})



//storage cost
function updateStorageCost(storageCost) {
    const extraStorageCost = document.getElementById('storage-cost');
    extraStorageCost.innerText = parseInt(storageCost);
    return extraStorageCost;
}

document.getElementById('SSD-256GB-button').addEventListener('click', function () {
    updateStorageCost(0);
    calculateTotal();
})
document.getElementById('SSD-512GB-button').addEventListener('click', function () {
    updateStorageCost(100);
    calculateTotal();
})
document.getElementById('SSD-1TB-button').addEventListener('click', function () {
    updateStorageCost(180);
    calculateTotal();
})


//delivery charge
function updateDeliveryCost(deliveryCost) {
    const extraDeliveryCost = document.getElementById('delivery-cost');
    extraDeliveryCost.innerText = parseInt(deliveryCost);
    return deliveryCost;

}

document.getElementById('Prime-delivery-button').addEventListener('click', function () {
    updateDeliveryCost(0);
    calculateTotal();
})
document.getElementById('Premium-delivery-button').addEventListener('click', function () {
    updateDeliveryCost(20);
    calculateTotal();
})


//promo code
function promoCode() {

    const input = document.getElementById('promo-input');
    const promoInput = input.value;
    const discount = document.getElementById('grand-total');
    const discountTotal = parseInt(discount.innerText);
    let cupon = discountTotal;
    if (promoInput == 'stevekaku') {
        cupon = cupon * ((100 - 20) / 100);
        discount.innerText = cupon;
    }
    else {
        input.value = '';
    }
}

document.getElementById('promo-code').addEventListener('click', function (event) {
    promoCode();

})
