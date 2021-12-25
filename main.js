const trolley = [
  {
    id: "frt1",
    quantity: 4,
  },
  {
    id: "ml1",
    quantity: 2,
  },
  {
    id: "ml2",
    quantity: 1,
  },
  {
    id: "chc1",
    quantity: 1,
  },
  {
    id: "drk1",
    quantity: 12,
  },
  {
    id: "drk2",
    quantity: 4,
  },
  {
    id: "frt2",
    quantity: 10,
  },
  {
    id: "msc1",
    quantity: 5,
  },
  {
    id: "ele1",
    quantity: 3,
  },
  {
    id: "pen1",
    quantity: 4,
  },
];

const inventory = [
  {
    id: "frt1",
    name: "Apple",
    isHealthy: true,
    recalled: false,
    price: 1,
  },
  {
    id: "chc1",
    name: "Large Chocolate bar",
    isHealthy: false,
    recalled: false,
    price: 3,
  },
  {
    id: "ml1",
    name: "Pasta Salad Meal",
    isHealthy: true,
    recalled: false,
    price: 4,
  },
  {
    id: "frt2",
    name: "Large Banana",
    isHealthy: true,
    recalled: true,
    price: 2,
  },
  {
    id: "ml2",
    name: "Chicken Sandwich Meal",
    isHealthy: true,
    recalled: false,
    price: 3,
  },
  {
    id: "drk1",
    name: "Red Bull Energy Drink",
    isHealthy: false,
    recalled: true,
    price: 4,
  },
  {
    id: "pen1",
    name: "A Pack Of Pens",
    isHealthy: true,
    recalled: false,
    price: 3,
  },
  {
    id: "drk2",
    name: "Orange Juice",
    isHealthy: false,
    recalled: true,
    price: 2,
  },
  {
    id: "msc1",
    name: "Pack Of Paper",
    isHealthy: true,
    recalled: false,
    price: 2,
  },
  {
    id: "drk3",
    name: "Bottled Water",
    isHealthy: true,
    recalled: true,
    price: 3,
  },
  {
    id: "ele1",
    name: "Laptop Computer",
    isHealthy: true,
    recalled: false,
    price: 300,
  },
  {
    id: "nut1",
    name: "Pack of Salted Peanuts",
    isHealthy: true,
    recalled: true,
    price: 1,
  },
  {
    id: "nut2",
    name: "Pack of Mixed Nuts",
    isHealthy: true,
    recalled: false,
    price: 2,
  },
  {
    id: "hdc1",
    name: "Large Latte",
    isHealthy: false,
    recalled: false,
    price: 4,
  },
  {
    id: "hdc2",
    name: "Large Skinny Cappucino",
    isHealthy: true,
    recalled: false,
    price: 4,
  },
];

//Task 1: I Don't Want To Sell This Any More
let isHealtyFood = inventory.filter((item) => item.isHealthy === true);
console.log(isHealtyFood.length);

// ## Section 2
// ### Task 1: No More Junk Food!

// A trolley has been taken to the checkout but the customer noticed that some junk food items have mysteriously been added to their trolley. Remove all items that are not healthy.

// let isUnhealtyFood = inventory.filter((item) => item.isHealthy === false);
// for (let i = 0; i < trolley.length; i++) {
//   for (let j = 0; j < isUnhealtyFood.length; j++) {
//     if (trolley[i].id === isUnhealtyFood[j].id) {
//       trolley.splice(i, 1);
//     }
//   }
// }
// console.log(trolley);

//### Task 2: Incorrect Item In The Bagging Area
// The customer is now at the point they're running through the self checkout.  Inside this cart there are several items.  Unfortunately, some items in the cart have been recalled and are no longer available.  Remove all items from the cart that are marked for recall
let recalledItem = inventory.filter((item) => item.recalled === true);
for (let i = 0; i < trolley.length; i++) {
  for (let j = 0; j < recalledItem.length; j++) {
    if (trolley[i].id === recalledItem[j].id) {
      trolley.splice(i, 1);
    }
  }
}
console.log(trolley);

//Task 3: Can I have a receipt?
let receipt = trolley.map((itm) => ({
  ...itm,
  ...inventory.find((elm) => elm.id == itm.id),
}));
console.log(receipt);
