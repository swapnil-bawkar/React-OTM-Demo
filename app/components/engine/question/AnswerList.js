/**
 * Created by iag on 6/6/16.
 */
var React = require('react');

var AnswerList = React.createClass({
   render: function() {
       var options = this.props.answers.map(function (option, index) {
           return <li key={index} onClick={this.onAnswerClick.bind(this, option)}><p>{option}</p></li>;
       }.bind(this));
       return (
           <div className="question-options" ref="questionOption">
               <ul className="option-ul">
                   {options}
               </ul>
           </div>
       );
   },
    onAnswerClick: function (option, event) {
        this.props.setUserAnswer(option);
        if(this.selectedTarget) {
            this.selectedTarget.style.backgroundColor = '#fff';
        }
        event.currentTarget.style.backgroundColor = '#FFC400';
        this.selectedTarget = event.currentTarget;
    } 
});

module.exports = AnswerList;