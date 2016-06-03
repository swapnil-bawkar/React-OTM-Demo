/**
 * Created by iag on 6/2/16.
 */
var React = require('react');
var ScoreBar = require('./ScoreBar');
var API = require('../../helpers/utils')

var Engine = React.createClass({
    getInitialState: function() {
        return {
            questions: [],
            currentQuestion: {}
        };
    },
    componentDidMount: function() {
        API.loadEngineData().then(function(data) {
            var questionNo = this.props.params.questionNo;
            this.setState({
                questions: data.questions.question,
                currentQuestion: this.state.questions[questionNo]
            });
        }.bind(this));
    },
    render: function() {
        return (
            <div className="question-container">
                <ScoreBar length={this.state.questions.length}></ScoreBar>
            </div>
        );
    }
});

module.exports = Engine ;