// BACKEND
function Pizza(diameter, $diameter, $toppings, toppings, total) {
  this.diameter = diameter;
  this.toppings = toppings;
  this.$diameter = $diameter;
  this.$toppings = $toppings;
  this.total = total;
}

// Pizza.prototype.chooseSize = function() {
//   this.diameter = $("#size option:selected").text();
//   this.$diameter = parseInt($("select#size").val());
//   return this.$diameter, this.diameter;
// }

// Pizza.prototype.addToppings = function() {
//   var priceToppings = 0;
//   var nameToppings = []
//   $('input:checkbox:checked').each(function() {
//     priceToppings += parseInt($(this).val());
//     nameToppings.push(this.name);
//   });
//   this.$toppings = priceToppings
//   this.toppings = joinAnd(nameToppings);
//   return this.$toppings, this.toppings;
// }

// Pizza.prototype.sumTotal = function() {
//   var sum = this.$diameter + this.$toppings;
//   return this.total = "$" + sum + ".00";
// }

// Pizza.prototype.submitReceipt1 = function() {
//   return "One " + this.diameter + " " + this.toppings + " pizza will be on it's way soon.";
// }

// Pizza.prototype.submitReceipt2 = function() {
//   return "You're total is $" + this.total;
// }

function joinAnd(array) {
  if (!array.length) {
    return "";
  }
  lastItem = array.pop();
  if (array.length === 0) {
    return lastItem;
  } else if (array.length > 0) {
    return array.join(", ") + " and " + lastItem;
  }
}

// FRONTEND
$(function(){
  $("form#mainForm").submit(function(event){
    event.preventDefault();

    var size = $("#size option:selected").text();
    var priceSize = parseInt($("select#size").val());
    var priceToppings = 0;
    var nameToppings = []
    $('input:checkbox:checked').each(function() {
      priceToppings += parseInt($(this).val());
      nameToppings.push(this.name);
    });
    var listToppings = joinAnd(nameToppings);
    var sum = priceSize + priceToppings;
    var total = sum.toFixed(2);

    var userPizza = new Pizza(size, priceSize, priceToppings, listToppings, total)

    // userPizza.chooseSize();
    // userPizza.addToppings();
    // userPizza.sumTotal();

    $("#receiptTextLine1").text("One " + size + " " + listToppings + " pizza will be on it's way soon.");
    $("#receiptTextLine2").text("You're total is $" + total);
    console.log(userPizza)
    $("#receiptShell").show();
  });
});
