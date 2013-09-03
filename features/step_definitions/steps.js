var stepsDefinitionsWrapper = function() {
  this.Given(/^I have a zombie instance$/, function(callback) {
    var zombie = require('zombie');
    this.browser = new zombie();
    callback();
  });

  this.When(/^I visit the page "([^"]*)"$/, function(url, callback) {
    this.browser.visit(url, callback);
  });

  this.Then(/^I should be on the google home page$/, function(callback) {
    if(this.browser.success == true) {
      callback();
    } else {
      callback.fail(new Error("Expected to be on google home page"));
    }
  });
};

module.exports = stepsDefinitionsWrapper;