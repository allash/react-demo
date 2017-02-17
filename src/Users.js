import React, { Component } from 'react';
import UsersList from './UsersList';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.setState({ users: [
      { id: 1, username: 'Adam', age: 32 },
      { id: 2, username: 'Ada', age: 36 },
      { id: 3, username: 'Mark', age: 42 },
      { id: 4, username: 'Glen', age: 34 },
      { id: 5, username: 'Tom', age: 22 }
    ]});
  }

  render() {
    return (
      <div>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default Users;
