const http =require('http');
const colors = require('colors');

console.log('hello'.green);
console.log('package.json'.red);

http.createServer((req,resp)=>{
    resp.write("hello, This is Anil sidhu");
    resp.end();
}).listen(4500);