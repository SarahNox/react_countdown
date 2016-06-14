
var React = require('react');
var Circle = require('rc-progress').Circle;

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
    return({
      seconds: this.initialCountdownValue() ,
      toggle: false,
      buttonLabel: "Start" 
    });
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
  percent: function(){
    var originalValue = this.initialCountdownValue(); 
    var currentValue = this.state.seconds;
    return(currentValue / originalValue * 100);
  },
  initialCountdownValue: function(){
   return(15);
 },
 render: function() {
  var circleContainerStyle = {
    "width": "250px",
    "height": "250px"
  }
  var layout = {
    "position": "relative",
    "top": "-150px",
    "left": "110px",
    "text": "center"
  }
  if (this.state.seconds > 0) {
    return (
      <div style={circleContainerStyle}>
      <Circle percent={this.percent()} strokeWidth="4" strokeColor="#ff0000" />
      <div style={layout}>
      {this.state.seconds}
      <br></br>
      <button onClick={this.handleClick}>{this.state.buttonLabel}</button>
      </div>
      </div>);
  } else {
    return (
      <div>Pomodoro finished</div>
      );
  }
}
})