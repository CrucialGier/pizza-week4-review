
var pizza;
var size;
var topping1;
var topping2;
var toppings = [];

function Topping(name, url, price) {
  this.name = name;
  this.img = url;
  this.price = price;
  toppings.push(this);
}
var none = new Topping("none", "none", 0);
var pineapple = new Topping("pineapple", "img/pineapple.png", 2);
var mushrooms = new Topping("mushrooms", "img/mushrooms.jpg", 1);
var spinach = new Topping("spinach", "img/spinach.jpg", 1);
var tomatoes = new Topping("tomatoes", "img/tomatoes.jpg", 1);
var artichokes = new Topping("artichokes", "img/artichokes.jpg", 3);

function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
}

Pizza.prototype.createPizza = function() {
  if (topping1 === 0 && topping2 === 0) {
    return this.result = "you want a " + this.size + " cheese pizza?";
  } else if (topping2 === 0){
    return this.result = "you want a " + this.size + " pizza with " + toppings[topping1].name + "?";
  } else if (topping1 === 0){
    return this.result = "you want a " + this.size + " pizza with " + toppings[topping2].name + "?";
  } else if (topping1 === topping2) {
    return this.result = "you want a " + this.size + " pizza with double " + toppings[topping1].name + "?";
  } else {
    return this.result = "you want a " + this.size + " pizza with " + toppings[topping1].name + " and " + toppings[topping2].name + "?";
  }
};

Pizza.prototype.getPrice = function() {
  return this.price = "Your order comes to a total of $" + (toppings[topping1].price + toppings[topping2].price + 10) + ".00. Thank you for dining with us!";
};


$(document).ready(function() {
  $("#size").change(function() {
    size = $("#size").val();
  });
  $("#topping1").change(function() {
    topping1 = parseInt($("#topping1").val())
  });
  $("#topping2").change(function() {
    topping2 = parseInt($("#topping2").val())
  });
  $("#getPizza").click(function(event) {
    event.preventDefault();
    $("#price").empty();
    pizza = new Pizza(size, toppings[topping1], toppings[topping2]);
    pizza.createPizza();
    $("#topping1Display").empty().append("<img src='" + pizza.topping1.img + "' alt=''>");
    $("#topping2Display").empty().append("<img src='" + pizza.topping2.img + "' alt=''>");
    $("#result").text(pizza.result);
  });
  $("#confirm").click(function() {
    pizza.getPrice();
    $("#price").text(pizza.price);
  });
});
