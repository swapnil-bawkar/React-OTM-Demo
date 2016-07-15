/**
 * Created by iag on 6/6/16.
 */
var React = require('react');

var FeedBackList = React.createClass({
    render: function() {
        return (
            <div className="feedback" ref="feedback">
                <ul>
                    <li className={this.props.feedbackClass}>{this.props.userAnswer}</li>
                    <li>{this.props.feedback}</li>
                </ul>
            </div>
        );
    }
});

module.exports = FeedBackList;