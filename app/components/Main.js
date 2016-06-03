/**
 * Created by iag on 5/31/16.
 */
var React = require('react');

var Main = React.createClass({
   render: function() {
       return (
        <div className="main">
            {this.props.children}
        </div>
       );
   }
});

module.exports = Main;