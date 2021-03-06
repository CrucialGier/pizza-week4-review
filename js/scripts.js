
function Topping(name, url, price) {
  this.name = name;
  this.img = url;
  this.price = price;
}

function Pizza(size, topping1, topping2) {
  this.allToppings = [
    {"name" : "none", "img" : "none", "price" : 0},
    {"name" : "pineapple", "img" : "img/pineapple.png", "price" : 2},
    {"name" : "artichokes", "img" : "img/artichokes.jpg", "price" : 3},
    {"name" : "tomatoes", "img" : "img/tomatoes.jpg", "price" : 1},
    {"name" : "spinach", "img" : "img/spinach.jpg", "price" : 1},
    {"name" : "mushrooms", "img" : "img/mushrooms.jpg", "price" : 1}
  ];
  this.size = size;
  this.topping1 = this.allToppings[topping1];
  this.topping2 = this.allToppings[topping2];
}

Pizza.prototype.createPizza = function() {
  if (this.topping1 === 0 && this.topping2 === 0) {
    return this.result = 0;
  } else if (this.topping2 === 0){
    return this.result = 1;
  } else if (this.topping1 === 0){
    return this.result = 2;
  } else if (this.topping1 === this.topping2) {
    return this.result = 3;
  } else {
    return this.result = 4;
  }
};

Pizza.prototype.getPrice = function() {
  return this.price = this.topping1.price + this.topping2.price + 10;
};

$(document).ready(function() {
  var pizza;
  $("#getPizza").click(function(event) {
    debugger;
    event.preventDefault();
    $("#price").empty();
    $("#confirm").show();
    pizza = new Pizza($("#size").val(), parseInt($("#topping1").val()), parseInt($("#topping2").val()));
    pizza.createPizza();
    if (pizza.result === 0) {
      $("#result").text("you want a " + this.size + " cheese pizza?");
    } else if (pizza.result === 1) {
      $("#result").text("you want a " + this.size + " pizza with " + pizza.topping1.name + "?");
    } else if (pizza.result === 2) {
      $("#result").text("you want a " + this.size + " pizza with " + pizza.topping2.name + "?");
    } else if (pizza.result === 3) {
      $("#result").text("you want a " + this.size + " pizza with double " + pizza.topping1.name + "?");
    } else if (pizza.result === 4) {
      $("#result").text("you want a " + this.size + " pizza with " + pizza.topping1.name + " and " + pizza.topping2.name + "?");
    }
    pizza.getPrice();
    $("#topping1Display").empty().append("<img src='" + pizza.topping1.img + "' alt=''>");
    $("#topping2Display").empty().append("<img src='" + pizza.topping2.img + "' alt=''>");
  });
  $("#confirm").click(function() {
    $("#price").text("Your order comes to a total of $" + pizza.price + ".00. Thank you for dining with us!");
  });
});
