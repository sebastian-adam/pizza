// BACKEND
function Pizza() {
  this.size;
  this.toppings;
}

Pizza.prototype.choosePrice = function() {

}

Pizza.prototype.addTopping = function() {
  var priceToppings = 0;
  $('input:checkbox:checked').each(function() {
    priceToppings += parseInt($(this).val());
  });
  return this.toppings = priceToppings
}


// FRONTEND
$(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();

    var priceSize = $("select#size").

    var userPizza = new Pizza();
    userPizza.chooseSize();
    userPizza.addTopping();

    console.log(userPizza)

  });
});
