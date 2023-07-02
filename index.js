const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
    "Thor": "Admiration, respect, and love",
    "Loki": "Your son"
  },
  signatories: [
    "Thor",
    "Loki"
  ]
};

// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   const outerContext = this;

//   this.signatories.forEach(function (signatory) {
//     const message = `${outerContext.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   });
// };

//printCard.call(messageConfig);

const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  // Wow! Elegant! And notice the arrow function's `this` is the same `this`
  // that printCard has; specifically, the `thisArg` that was passed to it
  this.signatories.forEach((signatory) =>
    console.log(`${this.closing[signatory]}, ${signatory}`)
  );
};

printCard.call(messageConfig);

// const greeter = (nameToGreet) => {
//   const message = `Good morning ${nameToGreet}`;
//   console.log(message);
//   return "Greeted: " + nameToGreet;
// };
//const result = greeter("Max");

// const greeter = function (nameToGreet) {
//   const message = `Good morning ${nameToGreet}`;
//   console.log(message);
//   return "Greeted: " + nameToGreet;
// }.bind(this);
// const result = greeter("Max Again");

