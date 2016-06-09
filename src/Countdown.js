
var React = require('react');

var Dial = require('react-dial-master');

  var SetIntervalMixin = {
    componentWillMount: function() {
      this.intervals = [];
    },
    setInterval: function() {
      this.intervals.push(setInterval.apply(null, arguments));
    },
    clearInterval: function() {
      this.intervals;
    },
    componentWillUnmount: function() {
      this.intervals.forEach(clearInterval);
    }
  };

module.exports = React.createClass({
    mixins: [SetIntervalMixin], 
    getInitialState: function() {
      return {seconds: 15,
              toggle: false,
              buttonLabel: "Start" };
    },
    handleClick: function() {
      if(this.state.toggle){
        this.setState({toggle: false, buttonLabel: "Start"});
        clearInterval(this.intervals);
      } else {
        this.setState({toggle: true, buttonLabel: "Pause"});
        this.setInterval(this.tick, 1000);
      }
    },
    tick: function() {
      this.setState({seconds: this.state.seconds - 1});
    },
    render: function() {
        if (this.state.seconds > 0) {
       return (<p>{this.state.seconds}
          <Dial value="30" angleOffset={0} angleArc={360} readOnly={true} fgColor="#000000" />
          <br></br>
          <button onClick={this.handleClick}>{this.state.buttonLabel}</button>
          </p>);
      } else {
        return (
          <div>Pomodoro finished</div>
          );
      }
    }
})