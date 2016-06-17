// BACKEND
function Pizza() {
  this.diameter;
  this.toppings;
  this.total;
}

Pizza.prototype.addToppings = function() {
  var priceToppings = 0;
  $('input:checkbox:checked').each(function() {
    priceToppings += parseInt($(this).val());
  });
  return this.toppings = priceToppings
}

Pizza.prototype.sumTotal = function() {
  var sum = this.diameter + this.toppings
  this.total = "$" + sum + ".00"
}

// FRONTEND
$(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();

    var userPizza = new Pizza();
    userPizza.diameter = parseInt($("select#size").val());
    userPizza.addToppings();
    userPizza.sumTotal();

    console.log(userPizza)

  });
});
