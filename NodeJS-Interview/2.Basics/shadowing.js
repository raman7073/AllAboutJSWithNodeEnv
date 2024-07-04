var c = 100;
function x() {
  var c = 10;
  console.log("from fun", c);
  if (true) {
    var c = 150;
  }
  console.log(c);
}
x();
console.log(c);
