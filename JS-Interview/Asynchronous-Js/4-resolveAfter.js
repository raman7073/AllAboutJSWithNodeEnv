const resolveAfter = (value, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

console.log(
  resolveAfter("Hello", 1000).then((msg) => {
    console.log(msg);
  })
);
