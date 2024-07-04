function csQr(n, cb) {
  setTimeout(() => {
    //process n;
    let res = n * n;
    cb(res);
  });
}
/*
 callback hell/ pyramid of doom
   when you have nested callbacks , it starts looking clumsy and also it's difficult 
   to manage.it has traingular shape like structure that's why it is called pyramid of
   doom. 
 inversion of control -> we are passing functions to executed by some other function
 To write callback functions in a better way we have promises in javascript. 
*/
csQr(2, function (res) {
  console.log(res);
  // now again want to use this result for other process or same
  csQr(res, function (res1) {
    console.log(res1);
  });
});
