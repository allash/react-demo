import React, { Component } from 'react';

class UsersList extends Component {

  render() {

    var usersRow = function(user) {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.age}</td>
        </tr>
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map(usersRow, this)}
        </tbody>
      </table>
    );
  }
}

export default UsersList;
