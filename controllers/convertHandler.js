/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    input = input.toLowerCase();
    let index = input.search(/[a-z]/g);
    let num = input.substring(0, index);
    result = eval(num);
    if(!result) result = 1;
    result = result.toFixed(5);
    return result;
  };
  
  this.getUnit = function(input) {
    let arr = input.match(/[a-z]/gi);
    var result = arr.join('');
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;

    initUnit = initUnit.toLowerCase();
    if(initUnit == 'kg'){
      result = 'lbs';
    }else if(initUnit == 'lbs'){
      result = 'kg';
    }else if(initUnit == 'gal'){
      result = 'L';
    }else if(initUnit == 'l'){
      result = 'gal';
    }else if(initUnit == 'mi'){
      result = 'km';
    }else if(initUnit == 'km'){
      result = 'mi';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    unit = unit.toLowerCase();
    if(unit == 'kg'){
      result = 'kilograms'
    }else if(unit == 'lbs'){
      result = 'pounds'
    }else if(unit == 'km'){
      result = 'kilometers'
    }else if(unit == 'mi'){
      result = 'miles'
    }else if(unit == 'gal'){
      result = 'gallons'
    }else if(unit == 'l'){
      result = 'liters'
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    var result;
    initUnit = initUnit.toLowerCase();
    if(initUnit == 'mi'){
      result = initNum*miToKm;
    }else if(initUnit == 'km'){
      result = initNum/miToKm;
    }else if(initUnit == 'lbs'){
      result = initNum*lbsToKg;
    }else if(initUnit == 'kg'){
      result = initNum/lbsToKg;
    }else if(initUnit == 'gal'){
      result = initNum*galToL;
    }else if(initUnit == 'l'){
      result = initNum/galToL;
    }
    
    if(result){
        result = result.toFixed(5);
    }
    console.log(initNum, initUnit, result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    result = `${initNum} ${this.spellOutUnit(initUnit)} converted to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
