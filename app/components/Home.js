/**
 * Created by iag on 5/31/16.
 */
var React = require('react');
var RouterRouter = require('react-router');
var browserHistory = RouterRouter.browserHistory;
var API = require('../helpers/utils');
require('./home.scss');

var Home = React.createClass({
    getInitialState: function() {
        return {
            subHeader: 'swapnil',
            instruction: ''
        };
    },
    componentDidMount: function() {
        API.loadEngineData().then(function(data) {
            this.setState({
                subHeader: data.activitySubtitle,
                instruction: data.instructions
            });
        }.bind(this));
    },
    
    render: function () {
        return (
            <div className="home">
                <div className="info-text">
                    <p>{this.state.subHeader}</p>
                    <p>{this.state.instruction}</p>
                </div>
                <div className="scoring-area">Try it now</div>
                <div className="footer">
                    <button type="button" onClick={this.handleClick}>START</button>
                </div>
            </div>
        );
    },
    handleClick: function () {
        browserHistory.push('/question/0')
    }
});

module.exports = Home;