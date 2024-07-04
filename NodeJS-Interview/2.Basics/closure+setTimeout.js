// var is function scoped
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();
// console.log("let block scope ");
// function y() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// y();
function c() {
  for (var i = 1; i <= 5; i++) {
    function closure(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    closure(i);
  }
}
c();
