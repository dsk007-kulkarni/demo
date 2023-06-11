const { log } = require("console");
const os = require("os");

const user = os.userInfo();

console.log(user);
console.log(`The sys uptime is ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
