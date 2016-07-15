/**
 * Created by iag on 6/2/16.
 */
var React = require('react');
require('./score-bar.scss');

var ScoreBar = React.createClass({
    propTypes: {
        questions: React.PropTypes.array.isRequired
    },
    render: function() {
        var questionBar = this.props.questions.map(function(question, index) {
            if(question.checkBtnClicked) {
                return <div key={index} className={question.correct ? 'correct' : 'incorrect'}></div>;
            } else {
                return <div key={index}></div>
            }
        });

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