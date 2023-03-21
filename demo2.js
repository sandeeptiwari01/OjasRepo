const http=require('http');
const data=require('./data')


function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(4)); // true
console.log(isInt(12.2)); // false
console.log(isInt(0.3)); // false


http.createServer((req,resp)=>{
  resp.writeHead(200,{'content-type':'application\json'});
  resp.write(JSON.stringify(data));
  resp.end();
}).listen(4200);