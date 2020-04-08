import React from 'react';
import './Signup.css';
import cvlogo from "./images/Logo.png";


class Signup extends React.Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    checkpassword: '',
    volunteer: false,
    notvolunteer: false,
    address1: '',
    address2: '',
    city: '',
    postcode: ''
  }
  createUser = async (event) => {
    event.preventDefault()

    console.log(this.state)

    let response = await fetch("http://localhost:3000/Signup", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: {"Content-Type": "application/json"}
    })

    console.log(await response.json())
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleVolunteerTickboxClick = () => {
    this.setState({volunteer: !this.state.volunteer});
  }
  handleNotVolunteerlTickboxClick = () => {
    this.setState({notvolunteer: !this.state.notvolunteer});
  }


  handleCheckPassword = () => {
    const { password, checkpassword } = this.state;
    if (password !== checkpassword) {
        alert("Passwords don't match");
    }
  }

  render() {
    return (
      <>
        <div className= "header">
        <img src={cvlogo} alt="covid-watch logo" />
        </div>
        <form onSubmit={this.createUser}>
          <label>
          Name:<br/>
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}></input>
          </label><br/>

          <label>
          Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}></input>
          </label><br/>

          <label>
            Email Address:
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}></input>
          </label><br/>

          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
          </label><br/>

          <label>
            Confirm Password:
            <input type="password" name="checkpassword" value={this.state.checkpassword} onChange={this.handleInputChange}></input>
          </label><br/>
          <br/>
          <p>Would you like to sign up as a volunteer or are you looking for help?</p>
          <div className="tickboxes">
          <label>
            Volunteer:
            <input type="checkbox" name="volunteer" value={this.state.volunteer} onChange={this.handleVolunteerTickboxClick}></input>
          </label><br/>

          <label>
            Need Help:
            <input type="checkbox" name="notvolunteer" value={this.state.notvolunteer} onChange={this.handleNotVolunteerlTickboxClick}></input>
          </label><br/>
          </div><br/>

          <label>
            Address Line 1:
            <input type="text" name="address1" value={this.state.address1} onChange={this.handleInputChange}></input>
          </label><br/>

          <label>
            Address Line 2:
            <input type="text" name="address2" value={this.state.address2} onChange={this.handleInputChange}></input>
          </label><br/>

          <label>
            City:
            <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange}></input>
          </label><br/>

          <label>
            Postcode:
            <input type="text" name="postcode" value={this.state.postcode} onChange={this.handleInputChange}></input>
          </label><br/>

          <input type="submit" value= "Sign Up" className="submit" onClick={this.handleCheckPassword}></input>
        </form>
      </>
    )
  }
}
export default Signup;

