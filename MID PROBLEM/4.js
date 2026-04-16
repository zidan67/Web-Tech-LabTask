function value(){
const unitPrice = 1000;

const qty = document.getElementById("qty");
const total = document.getElementById("total");

qty.addEventListener("input", function() {

  let quantity = parseInt(qty.value);

  // Validation: negative check
  if (quantity < 0 || isNaN(quantity)) {
    quantity = 0;
    qty.value = 0;
    return true;
  }

  // Calculate total
  let totalPrice = unitPrice * quantity;
  total.value = totalPrice;

  // Gift coupon condition
  if (totalPrice > 1000) {
    alert("You are eligible for a gift coupon!");
    return true;
  }
return false;
});}