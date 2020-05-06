import React, { Component } from 'react';
import logo from './logo.svg';
import UsersData from './users.json';
import Users from './components/users'
import './App.css';



class App extends Component {
  
  state = {
    users: UsersData,
    search: '',
    student: false,
    teacher: false,
    campus: ''
}

// and the handleChange method
handleSearch = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      users: UsersData.filter((user) => {
        return (
          user.firstName
          .includes(event.target.value) 
          ||
          user.lastName
          .includes(event.target.value)
        );
      }),
    });
}

changeHandlerTeacher = event => {
  this.setState({
    teacher: event.target.checked,
    users: UsersData.filter((user) => {
      return (
        user.role === "teacher" && event.target.checked
      );
    }),
  });
}

changeHandlerStudent = event => {
  this.setState({
    student: event.target.checked,
    users: UsersData.filter((user) => {
      return (
        (user.role === "student" && event.target.checked)
      );
    }),
  });
}

changeHandlerCampus = (event) => {
  console.log(this.state.value)
  this.setState({
      campus: event.target.option,
      users:UsersData.filter((user) =>{
          return user.campus === event.target.value
      })
  }
  );
}

  render() {

    return (
      <div className="App">
      <h1>IronBook</h1>
      <input type="checkbox" name="check" onChange={this.changeHandlerStudent} />
        <label htmlFor="">Student</label>
        <input type="checkbox" name="check" onChange={this.changeHandlerTeacher} />
        <label htmlFor="">Teacher</label>
        <select value={this.state.campus} onChange={this.changeHandlerCampus}>
        <option value="Berlin">Berlin</option>
        <option value="Lisbon">Lisbon</option>
        <option value="Paris">Paris</option>
        </select>
      <label htmlFor="search">Search: </label>
        <input
        type="search"
        name="search"
        id="search"
        value={this.state.name}
        onChange={this.handleSearch}

        />
      <div className="ironBook">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
        </thead>
        <tbody>
       {this.state.users.map((user) =>        
       (
      
            <Users id={user.id} linkedin={user.linkedin}  firstName={user.firstName} lastName={user.lastName} campus={user.campus} role={user.role} />
      )
      )}
      </tbody>
      </table>
      </div>
      </div>
    );
  }
}


export default App;
