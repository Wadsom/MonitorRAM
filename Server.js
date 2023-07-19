
//const status = require('./MonitorRam');
const http = require('http');
const {Status} = require('../../../MonitorRAM/MonitorRAM/MonitorRam')
let port = 4030;
const Host = "localhost:"



http.createServer(function(req, res){

   
   
    let url = req.url;
    if(url === '/status' ){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify((Status()), null, 2));
    } else {
        
let port = 4030;
res.end("da /status Moral");
    }
    



}).listen(port, () => { console.log(` Porta N°: ${Host}${port}`) })