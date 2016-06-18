// BACKEND
function Pizza() {
  this.diameter;
  this.toppings;
  this.total;
}

Pizza.prototype.chooseSize = function() {
  this.diameter = parseInt($("select#size").val());
  if (!this.diameter) {
    alert("Please select size.");
    return;
  }
  return this.diameter;
}

Pizza.prototype.addToppings = function() {
  var priceToppings = 0;
  $('input:checkbox:checked').each(function() {
    priceToppings += parseInt($(this).val());
  });
  return this.toppings = priceToppings;
}

Pizza.prototype.sumTotal = function() {
  var sum = this.diameter + this.toppings;
  return this.total = "$" + sum + ".00";
}


// FRONTEND
$(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();

    var userPizza = new Pizza();

    userPizza.chooseSize();
    userPizza.addToppings();
    userPizza.sumTotal();

    console.log(userPizza)
    $("#receiptShell").show();
  });
});
