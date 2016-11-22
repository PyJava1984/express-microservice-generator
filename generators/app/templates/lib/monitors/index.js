'use strict';

/*
 * Dependencies
 */
var VitalSigns = require('vitalsigns');

module.exports = function () {
  var vitals = new VitalSigns();

  // Add a custom monitor
  vitals.monitor(require('./example-monitor'));

  // Add a health check for the custom monitor
  vitals.unhealthyWhen('example', 'status').equals("DOWN");

  return vitals;
};