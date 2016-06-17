

function Topping(name, img) {
  this.name = name;
  this.img = img;
}

function Pizza(size) {
  this.size = size;
}

Pizza.prototype.topping1(function(topping) {
  this.topping1 = topping;
});

Pizza.prototype.topping2(function(topping) {
  this.topping2 = topping;
});


$(document).ready(function() {
  $("#submit").click(function(event){
    event.preventDefault();

  });
});
