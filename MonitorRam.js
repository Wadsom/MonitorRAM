// API de atributos do Windows

const os = require('os');
const { arch, platform, totalmem, freemem, release, hostname } = os;
function Status(){ 
 

        let TotaRAM = totalmem() / 1024 / 1024;
        let FreeRAM = freemem() / 1024 / 1024;
        let MemoRUsed = (FreeRAM / TotaRAM) * 100;

        const Painel = {
            os: platform(),
            arch: arch(),
            User: hostname(),
            TotalRAM: `${parseInt(TotaRAM)} MB`,
            FREERAM: `${parseInt(FreeRAM)} MB`,
            MemorUsed: `${MemoRUsed.toFixed(2)}`


        }
        return Painel;
    }



module.exports = { Status };

