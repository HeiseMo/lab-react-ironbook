import React, { Component } from 'react';
import logo from './logo.svg';
import UsersData from './users.json';
import Users from './components/users'
import './App.css';



class App extends Component {
  
  state = {
    users: UsersData,
    search: '',
    student: true,
    teacher: true,
    campus: ''
}

// and the handleChange method
handleSearch = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      // users: UsersData.filter((user) => {
      //   return (
      //     user.firstName
      //     .includes(event.target.value) 
      //     ||
      //     user.lastName
      //     .includes(event.target.value)
      //   );
      // }),
    });
}

changeHandlerTeacher = event => {
  console.log(event.target.checked);
  this.setState({
    [event.target.name]: event.target.checked,
    // users: UsersData.filter((user) => {
    //   return (
    //     user.role === "teacher" && event.target.checked
    //   );
    // }),
  });
}

changeHandlerStudent = event => {
  console.log(event.target.checked);
  this.setState({
    [event.target.name]: event.target.checked,
    // users: UsersData.filter((user) => {
    //   return (
    //     (user.role === "student" && event.target.checked)
    //   );
    // }),
  });
}

changeHandlerCampus = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
      // users:UsersData.filter((user) =>{
      //     return user.campus === event.target.value
      // })
  }
  );
}

  render() {
    let filtered = this.state.users.filter(user => {
      // console.log(user.firstName)
      // console.log(this.state.search)
      if(this.state.student){
        return user.role.includes('student') && (user.firstName.includes(this.state.search) || user.lastName.includes(this.state.search))
      }

      if(this.state.teacher){
        return user.role.includes('teacher')
      }
      console.log(this.state.campus)
      if(this.state.campus){
        console.log(this.state.campus)
        return user.campus === this.state.campus
      }

    })
    return (
      <div className="App">
      <h1>IronBook</h1>
      <input type="checkbox" name="student" checked={this.state.student} onChange={this.changeHandlerStudent} />
        <label htmlFor="">Student</label>
        <input type="checkbox" name="teacher" checked={this.state.teacher} onChange={this.changeHandlerTeacher} />
        <label htmlFor="">Teacher</label>
        <select name='campus' value={this.state.campus} onChange={this.changeHandlerCampus}>
        <option value="Berlin">Berlin</option>
        <option value="Lisbon">Lisbon</option>
        <option value="Paris">Paris</option>
        </select>
      <label htmlFor="search">Search: </label>
        <input
        type="search"
        name="search"
        id="search"
        value={this.state.search}
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
       {filtered.map((user) =>        
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
