import React, { Component } from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }

    this.updateUsers = this.updateUsers.bind(this);
  }

  componentDidMount() {
    /*this.setState({ users: [
      { id: 1, username: 'Adam', age: 32 },
      { id: 2, username: 'Ada', age: 36 },
      { id: 3, username: 'Mark', age: 42 },
      { id: 4, username: 'Glen', age: 34 },
      { id: 5, username: 'Tom', age: 22 }
    ]});*/
  }

  updateUsers(newUser) {
    var allUsers = this.state.users.concat([newUser]);
    this.setState({ users: allUsers });
  }

  render() {
    return (
      <div>
        <UsersList users={this.state.users} />
        <AddUser onFormSubmit={this.updateUsers} />
      </div>
    );
  }
}

export default Users;
