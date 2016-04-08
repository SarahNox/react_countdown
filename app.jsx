import React from 'react';

class MainApp extends React.Component {
    constructor(props) {
      super(props);
    }
  render() {
    return (
      <div>
      {this.props.message}
       </div>
    )
  }
}
MainApp.defaultProps = {message: "Hello world!"};
React.render(<MainApp />, document.body);

