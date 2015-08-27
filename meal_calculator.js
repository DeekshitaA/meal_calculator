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
                  //  console.log('John: '+ JSON.parse(John));
var TotalBill = John.addToBill() + Joe.addToBill() + Jill.addToBill();
var TotalBillWithTax = TotalBill + (TotalBill / 0.2);
console.log('TotalBill: '+ TotalBill);
