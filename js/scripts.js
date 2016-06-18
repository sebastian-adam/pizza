// BACKEND
function Pizza() {
  this.diameter;
  this.toppings;
  this.$diameter;
  this.$toppings;
  this.total;
}

Pizza.prototype.chooseSize = function() {
  this.diameter = $("#size option:selected").text();
  this.$diameter = parseInt($("select#size").val());
  return this.$diameter, this.diameter;
}

Pizza.prototype.addToppings = function() {
  var priceToppings = 0;
  var nameToppings = []
  $('input:checkbox:checked').each(function() {
    priceToppings += parseInt($(this).val());
    nameToppings.push(this.name);
  });
  this.$toppings = priceToppings
  this.toppings = joinAnd(nameToppings);
  return this.$toppings, this.toppings;
}

Pizza.prototype.sumTotal = function() {
  var sum = this.$diameter + this.$toppings;
  return this.total = "$" + sum + ".00";
}

Pizza.prototype.submitReceipt1 = function() {
  return "One " + this.diameter + " " + this.toppings + " pizza will be on it's way soon.";
}

Pizza.prototype.submitReceipt2 = function() {
  return "You're total is " + this.total;
}

function joinAnd(array) {
  lastItem = array.pop();
  if (!array.length) {
    return "";
  } else if (array.length === 0) {
    return lastItem;
  } else if (array.length > 0) {
    return array.join(", ") + " and " + lastItem;
  }
}

// FRONTEND
$(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();

    var userPizza = new Pizza();

    userPizza.chooseSize();
    userPizza.addToppings();
    userPizza.sumTotal();

    $("#receiptTextLine1").text(userPizza.submitReceipt1());
    $("#receiptTextLine2").text(userPizza.submitReceipt2());
    console.log(userPizza)
    $("#receiptShell").show();
  });
});
