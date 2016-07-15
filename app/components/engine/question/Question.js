/**
 * Created by sbawkar on 6/3/2016.
 */
var React = require('react');
var AnswerList = require('./AnswerList');
var FeedBackList = require('./FeedBackList');
require('./question.scss');

var Question = React.createClass({
    propTypes: {
        question: React.PropTypes.object
    },
    getInitialState: function() {
        return {
            btnText: 'CHECK',
            feedback: '',
            feedbackClass: ''
        };
    },
    componentWillReceiveProps: function(nextProps) {
        if(nextProps.endOfQuestion) {
            this.setState({
                btnText: 'VIEW RESULTS'
            });
        }
    },
    render: function() {
        return (
            <div className="question">
                <div className="question-text-wrapper">
                    <p>{this.props.question && this.props.question.text}</p>
                </div>
                {this.props.question && !this.props.question.checkBtnClicked && <AnswerList answers={this.props.question.answers.answer}
                                                    setUserAnswer={this.setUserAnswer}></AnswerList>}
                {this.props.question && this.props.question.checkBtnClicked && <FeedBackList feedbackClass={this.state.feedbackClass}
                                                      userAnswer={this.props.question.userAnswer}
                                                      feedback={this.state.feedback}></FeedBackList>}
                <div className="footer-btn">
                    <button type="button" onClick={this.handleClick}>{this.state.btnText}</button>
                </div>
            </div>
       );
    },
    handleClick: function(event) {
        if(event.currentTarget.innerHTML === 'NEXT') {
            this.props.nextBtn();
            this.setState({
                btnText: 'CHECK',
                feedback: '',
                feedbackClass: ''
            });
        } else {
            this.showFeedBack();
        }
    },
    showFeedBack: function() {
        var index = this.props.question.answers.answer.indexOf(this.props.question.userAnswer);
        var correct = false;
        if(index === 0) {
            correct = true;
        }
        var feedback = correct ? 'Well Done' : 'The correct answer was '+this.props.question.answers.answer[0];
        var feedbackClass = correct ? 'correct-answer' : 'in-correct-answer';
        this.setState({
            btnText: 'NEXT',
            feedback: feedback,
            feedbackClass: feedbackClass
        });
        this.props.updateScoreBar(correct);
    },
    setUserAnswer: function (option) {
        this.props.setUserAnswer(option);
    }
});

module.exports = Question;