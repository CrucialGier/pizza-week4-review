var size;
var topping1;
var topping2;

var toppings = [];

function Topping(name, url) {
  this.name = name;
  this.img = url;
  toppings.push(this);
}
var none = new Topping("none", "none");
var pineapple = new Topping("pineapple", "img/pineapple.png");
var mushrooms = new Topping("mushrooms", "img/mushrooms.jpg");
var spinach = new Topping("spinach", "img/spinach.jpg");
var tomatoes = new Topping("tomatoes", "img/tomatoes.jpg");
var artichokes = new Topping("artichokes", "img/artichokes.jpg");

function Pizza(size, topping1, topping2) {
  this.size;
  this.topping1;
  this.topping2;
}


Pizza.prototype.topping1 = function(topping) {
  return this.topping1 = topping;
};

Pizza.prototype.topping2 = function(topping) {
  return this.topping2 = topping;
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
    var pizza = new Pizza(size, topping1, topping2);
  });
});
