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
    return this.result = 0;
  } else if (topping2 === 0){
    return this.result = 1;
  } else if (topping1 === 0){
    return this.result = 2;
  } else if (topping1 === topping2) {
    return this.result = 3;
  } else {
    return this.result = 4;
  }
};

Pizza.prototype.getPrice = function() {
  return this.price = "Your order comes to a total of $" + (this.topping1.price + this.topping2.price + 10) + ".00. Thank you for dining with us!";
};


$(document).ready(function() {
  var pizza;
  $("#getPizza").click(function(event) {
    event.preventDefault();
    $("#price").empty();
    $("#confirm").show();
    pizza = new Pizza($("#size").val(), toppings[parseInt($("#topping1").val())], toppings[parseInt($("#topping2").val())]);
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
    $("#price").text(pizza.price);
  });
});
