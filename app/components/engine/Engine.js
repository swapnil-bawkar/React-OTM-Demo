/**
 * Created by iag on 6/2/16.
 */
var React = require('react');
var API = require('../../helpers/utils');
var ScoreBar = require('./score-bar/ScoreBar');
var Question = require('./question/Question');
require('./engine.scss');

var Engine = React.createClass({
    getInitialState: function() {
        return {
            questions: [],
            currentQuestion: undefined,
            index: 0,
            endOfQuestion: false
        };
    },
    componentDidMount: function() {
        API.loadEngineData().then(function(data) {
            var questionNo = parseInt(this.props.params.questionNo);
            this.setState({
                questions: data.questions.question,
                currentQuestion: data.questions.question[questionNo]
            });
        }.bind(this));
    },
    render: function() {
        return (
            <div className="question-container">
                <ScoreBar questions={this.state.questions}></ScoreBar>
                <Question question={this.state.currentQuestion}
                          nextBtn={this.nextBtn}
                          updateScoreBar={this.updateScoreBar}
                          setUserAnswer={this.setUserAnswer} 
                          endOfQuestion={this.state.endOfQuestion}></Question>
            </div>
        );
    },
    nextBtn: function() {
        var index = this.state.index;
        if(index < this.state.questions.length - 1) {
            index++;
            var nextQuestion = this.state.questions[index];
            this.setState({
                index: index,
                currentQuestion: nextQuestion
            });
        }
    },
    updateScoreBar: function(correct) {
        var questions = this.state.questions;
        var currentQuestion = questions[this.state.index];
        currentQuestion.checkBtnClicked = true;
        currentQuestion.correct = correct;
        var endOfQuestion = false;
        if(this.state.index === this.state.questions.length - 1) {
            endOfQuestion = true;
        }
        this.setState({
            questions: questions,
            endOfQuestion: endOfQuestion
        });
    },
    setUserAnswer: function(userAnswer) {
        var questions = this.state.questions;
        var currentQuestion = questions[this.state.index];
        currentQuestion.userAnswer = userAnswer;
        var index = this.state.index;
        this.setState({
            questions: questions
        });
    }
});

module.exports = Engine ;