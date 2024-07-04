const fs = require("fs");
//console.log(fs);
// fs.stat(__filename, (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stats);
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
//   console.log(stats.isSymbolicLink());
//   console.log(stats.size);
//   console.log(stats.atime);
//   console.log(stats.mtime);
//   console.log(stats.ctime);
//   console.log(stats.birthtime);
// });

const ifExists = fs.existsSync(__filename);
console.log(ifExists);
fs.writeFileSync("test.txt", "Hello World");
