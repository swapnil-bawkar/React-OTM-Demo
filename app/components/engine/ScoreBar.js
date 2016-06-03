/**
 * Created by iag on 6/2/16.
 */
var React = require('react');
require('./score-bar.scss');

var ScoreBar = React.createClass({
    propTypes: {
        length: React.PropTypes.number.isRequired
    },
    render: function() {
        var questionBar = [];
        for(var i = 0; i < this.props.length; i++) {
            questionBar.push(<div key={i}></div>);
        }
        return (
           <div className="score-bar-container">
               <div className="score-bar">
                    {questionBar}
               </div>
           </div>
        );
   }
});
module.exports = ScoreBar;