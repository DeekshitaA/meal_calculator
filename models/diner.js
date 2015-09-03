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

module.exports = Diner;
