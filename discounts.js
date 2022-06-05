const originalPrice = 120;
const discount = 18;

// const percentageDiscountPrice = 100 - discount;
// const discountPrice = (originalPrice * percentageDiscountPrice)/100;

/*console.log({
    originalPrice,
    discount,
    percentageDiscountPrice,
    discountPrice
});*/

const coupons = [
    "randall1",
    "randall2",
    "randall3"
];

function calculateDiscountPrice(originalPrice, discount){
    const percentageDiscountPrice = 100 - discount;
    const discountPrice = (originalPrice * percentageDiscountPrice)/100;

    return discountPrice;
}

function OnClickBtnPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const discountPrice = calculateDiscountPrice(priceValue, discountValue);
    const pResult = document.getElementById("pResult");
    pResult.innerText = "Discount price: $" + discountPrice;
}