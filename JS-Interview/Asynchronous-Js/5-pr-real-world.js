// creating promises
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}
function validateCart(cart) {
  return true;
}
function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    //logic to to payment with order having above orderId
    resolve("Payment Successful");
  });
}
//consuming promises
const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
promise
  .then((orderId) => {
    console.log(orderId);
    return proceedToPayment(orderId);
    //console.log(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log("No matter what happens , I will definetely be called");
  });
