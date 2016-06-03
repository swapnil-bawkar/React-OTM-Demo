/**
 * Created by sbawkar on 6/3/2016.
 */
var React = require('react');
require('./question.scss');

var Question = React.createClass({
    propTypes: {
        question: React.PropTypes.object
    },
    render: function() {
        var options = '';
        if(this.props.question.answers) {
            options = this.props.question.answers.answer.map(function (option, index) {
                return <li key={index}>{option}</li>;
            });
        }
        
        return (
            <div className="question">
                <div className="image-wrapper">
                    <img src=""/>
                </div>
                <div className="question-text-wrapper">
                    <p>{this.props.question.text}</p>
                </div>
                <div className="question-options">
                    <ul>
                        {options}
                    </ul>
                </div>
                <div className="footer-btn">
                    <button type="button" onClick={this.handleClick}>NEXT</button>
                </div>
            </div>
       );
    }
});

module.exports = Question;