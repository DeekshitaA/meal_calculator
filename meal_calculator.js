var Diner = function(dishes){
  this.dishes = dishes;
};

Diner.prototype.addToBill = function(){
  var bill = 0;
  for(var i = 0; i< this.dishes.length; i++){
    bill += this.dishes[i].bill;
  }
  return bill;
};

var John = new Diner([{'item':'pizza', 'bill': 10.20},
                      {'item':'diet coke','bill':2}]);
var Joe = new Diner([{'item':'Pasta', 'bill': 12.20},
                      {'item':'Red Wine','bill':7}]);
var Jill = new Diner([{'item':'Chicken Piccata', 'bill': 7.20},
                    {'item':'Torta Rustica','bill':14},
                    {'item': 'Mojito', 'bill': 10}]);
var TotalBill = John.addToBill() + Joe.addToBill() + Jill.addToBill();
var tip = TotalBill * 0.1;
var TotalBillWithTip = TotalBill + tip;
var TotalBillWithTax = TotalBill + (TotalBill * 0.2) + tip;
var JohnBill =  John.addToBill() + (John.addToBill() * 0.2) + (tip/3);
var JoeBill = Joe.addToBill() + (Joe.addToBill() * 0.2) + (tip/3);
var JillBill = Jill.addToBill() + (Jill.addToBill() * 0.2) + (tip/3);
console.log('TotalBill: '+ TotalBillWithTip);
console.log('TotalBill With Tax: '+ TotalBillWithTax);
console.log('John bill:' + JohnBill);
console.log("Joe's bill:" + JoeBill);
console.log("Jill's bill:" + JillBill);
