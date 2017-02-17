import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <h3>This is the footer. {this.props.someParam}</h3>
      </div>
    );
  }
}

export default Footer;
