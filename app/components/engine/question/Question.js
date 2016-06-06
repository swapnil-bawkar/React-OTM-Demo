/**
 * Created by sbawkar on 6/3/2016.
 */
var React = require('react');
require('./question.scss');

var Question = React.createClass({
    propTypes: {
        question: React.PropTypes.object
    },
    getInitialState: function() {
        return {
            btnText: 'CHECK',
            currentQuestion: {},
            checkBtnClicked: false
        };
    },
    render: function() {
        var options = '';
        if(this.props.question.answers) {
            options = this.props.question.answers.answer.map(function (option, index) {
                return <li key={index} onClick={this.onAnswerClick.bind(this, option)}><p>{option}</p></li>;
            }.bind(this));
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
                    <ul className="option-ul">
                        {options}
                    </ul>
                </div>
                <div className="feedback">
                    <ul>
                        <li>{this.state.userAnswer}</li>
                    </ul>
                </div>
                <div className="footer-btn">
                    <button type="button" onClick={this.handleClick}>{this.state.btnText}</button>
                </div>
            </div>
       );
    },
    handleClick: function(event) {
        this.setState({
            btnText: 'NEXT',
            checkBtnClicked: true,
            userAnswer: this.props.question.userAnswer
        });
    },
    onAnswerClick: function (option) {
        var index = this.props.question.answers.answer.indexOf(option);
        if(index === 0) {
            this.props.question.correct = true;
        } else {
            this.props.question.correct = false;
        }
        this.props.question.userAnswer = option;
        this.answerOption.style.backgroundColor = '#FFC400';
    }
});

module.exports = Question;