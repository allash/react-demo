import React, { Component } from 'react';

class AddUser extends Component {

  constructor(props) {
    super(props);

    this.state = {item: ''};
    this.onChange = this.onChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input placeholder="type username" ref='item' onChange={this.onChange} value={this.state.item} />
        <button type='submit'>Add</button>
      </form>
    );
  }

  addUser(e) {
      e.preventDefault();

      var user = {
        id: Math.random(),
        username: this.state.item,
        age: 30
      };

      console.log('new user pre: ' + JSON.stringify(user));

      this.props.onFormSubmit(user);
      this.setState({item: ''});

      console.log('new user post: ' + JSON.stringify(user));
  }

  onChange(e) {
    this.setState({ item: e.target.value });
  }
}

export default AddUser;
