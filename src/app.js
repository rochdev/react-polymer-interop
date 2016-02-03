'use strict';

var React = require('react');

var App = React.createClass({
  render: function() {
    return <paper-button raised onClick={this.onClick}>Test</paper-button>;
  },

  onClick: function(e) {
    console.log(e);
  }
});

module.exports = App;
