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

const coupons2 = [
    {
        name: "randall1",
        discount: 15,
    },
    {
        name: "randall2",
        discount: 30,
    },
    {
        name: "randall3",
        discount: 25,
    },
];

function calculateDiscountPrice(originalPrice, discount) {
    const percentageDiscountPrice = 100 - discount;
    const discountPrice = (originalPrice * percentageDiscountPrice) / 100;

    return discountPrice;
}

function OnClickBtnPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    /*
    let discount;

    switch (couponValue) {
        case coupons[0]:
            discount = 15;
            break;
        case coupons[1]:
            discount = 20;
            break;
        case coupons[2]:
            discount = 25;
            break;
    }

   if(!coupons.includes(couponValue)){
       alert(couponValue + " coupon is not valid");
   } else if(couponValue === "randall1"){
       discount = 15;
   }  else if(couponValue === "randall2"){
    discount = 20;
    } else if(couponValue === "randall3"){
        discount = 20;
    }
    */

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons2.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert(couponValue + " coupon is not valid");
    } else {
        const discount = userCoupon.discount;
        const discountPrice = calculateDiscountPrice(priceValue, discount);
        const pResult = document.getElementById("pResult");
        pResult.innerText = "Discount price: $" + discountPrice;
    }


}