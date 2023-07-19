const os = require('os');
const { arch , platform, totalmem, freemem , host} = os;
const TTRAM = totalmem() / 1024 /1024;
const FREERAM = freemem( ) /1024 /1024;
let UsageRam = (FREERAM / TTRAM ) * 100;

setTimeout(() =>{

const StatusRAM ={
   OS: platform(),
   Arch: arch(),  
   TotalRam: `${TTRAM.toFixed(0)} MB`,
   FreeRam: `${FREERAM.toFixed(0)} MB`,
   Usage: UsageRam.toFixed(2)
   
}

console.clear();
console.table(StatusRAM)
}, 1000);