/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);

      initUnit = initUnit.toLowerCase();
      if(initUnit == 'kg' || initUnit == 'lbs' || initUnit == 'l' || initUnit == 'gal' || initUnit == 'km' || initUnit == 'mi'){
        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        
        let data = {
          'initNum': initNum,
          'initUnit': initUnit,
          'returnNum': returnNum,
          'returnUnit': returnUnit,
          'string': toString 
        };

        res.status(200).json(data);
      }else{
        let data = {  "error": "invalid unit", "string":  'Error - ' + initUnit };
        res.status(200).send(data);
      }      
    });
};
