
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log('Listening on port 3000...');












//emit means making a noise or signalling that an event has happened

// function sayHello(name) {
//   console.log('Hello there ' + name);
// }

// //sayHello('Evelyn');
// console.log(window);
//Node global objects include:
//1) console()
//2)setTimeout() is used to call a function after a delay. //3) clearTimeout() 4) setInterval() it is used to repeatedly call afunction after a given delay clearInterval() to stop the function from being called repeatedly.
//in node, there is no window object, but global

// var message = '';
// console.log(global.message);

// console.log(module);
// in node, every file is am= module and the variables defined in that file is a scope to that module. they are not available outside of that module.
//to load a module , we use the require function

// const log = require('./logger');

// log('message');
//In node, when u define a module, u export one or more menbers. and then, to load a module, we use the require() function. it is always better to store the result of the module in a constant. bcz u dont want to accidentally override the value of the module.

//instead opf exporting an object from a module, you have to export only a single funtion. in the logger miodule, we dont need an object bcz we have a single mthd. (module.exports.log = log).
//an object will be useful if we have multuple methods or property. so we can reset it to (module.export = log;). and in the app.js, we change the logger to log bcz it is no longer an object but a fubnction we can call directly.