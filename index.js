// const { area, cir } = require("./circle");
const Circle = require("./Circle");

const circle = new Circle();

// circle.area();
let a,
  c,
  rad = 2;
choice = 1;
if (rad > 0 && choice == 0) {
  a = circle.area(rad);
  console.log(`The area of circle is ${a}.`);
} else if (rad > 0 && choice == 1) {
  c = circle.cir(rad);
  console.log(`The circumference of circle is ${c}.`);
} else {
  console.log(`Please enter valid value.`);
}

// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write("Hi welcome NodeJS nice to see you here!");
//     res.end()
// });

// server.listen(3000);
