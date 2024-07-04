/*
  The OS module is useful as it provides
  all the information regarding the operating system on
  which the process is running.
  Like:
   Current user information, OS platform,
   System free memory, System total memory,
   CPU information, Architecture of processor,
   and many more.
   Related Question: 
   1. How can you get free memory of the current system?
      os.freemem() is used to get the free memory of the current system.
    
    
  */
const os = require("os");
console.log(os.userInfo());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.type());
console.log(os.arch());
console.log(os.constants);
