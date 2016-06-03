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
            currentQuestion: {}
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
        console.log(this.state);
        return (
            <div className="question-container">
                <ScoreBar length={this.state.questions.length}></ScoreBar>
                <Question question={this.state.currentQuestion}></Question>
            </div>
        );
    }
});

module.exports = Engine ;