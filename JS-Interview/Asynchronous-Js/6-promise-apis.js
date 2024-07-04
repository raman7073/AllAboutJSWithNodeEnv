/*
  Important Promise Apis:
    1. Promise.all()
     The Promise.all() static method takes an iterable of promises as input and returns a
     single Promise.This returned promise fulfills when all of the input's promises 
     fulfill (including when an empty iterable is passed), with an array of the fulfillment
     values.It rejects when any of the input's promises rejects, with this first rejection
     reason.

    2. Promise.allSettled()
      The Promise.allSettled() static method takes an iterable of promises as input and 
      returns a single Promise. This returned promise fulfills when all of the input's 
      promises settle (including when an empty iterable is passed), 
      with an array of objects that describe the outcome of each promise.

    3. Promise.race()
     The Promise.race() static method takes an iterable of promises as input and returns
     a single Promise.This returned promise settles with the eventual state of the first
     promise that settles.
    4. Promise.any()
     The Promise.any() static method takes an iterable of promises as input and 
     returns a single Promise. This returned promise fulfills when any of the input's 
     promises fulfills, with this first fulfillment value. It rejects when all of the 
     input's promises reject (including when an empty iterable is passed), 
     with an AggregateError containing an array of rejection reasons.
 */

// Example 1: Promise.all()
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Promise 1 resolved");
    reject("Promise 1 rejected");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Promise 2 resolved");
    reject("Promise 2 rejected");
  }, 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("Promise 3 resolved");
    reject("Promise 3 rejected");
  }, 3000);
});
// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// Promise.race([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
Promise.any([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });
