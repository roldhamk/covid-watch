import React from 'react';
import './Signup.css';
import cvlogo from "./images/Logo.png";


class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    checkpassword: '',
    volunteer: false,
    notvolunteer: false,
    addressl1: '',
    addressl2: '',
    city: '',
    postcode: '',
  }
  Signup = async (event) => {    
    event.preventDefault()
    this.props.history.push('/Listings');

    console.log(this.state)

    let response = await fetch("http://localhost:3001/Signup", {
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
    else {
      alert('User created')
      this.setState({redirectToReferrer: true})
    }
  }

  render() {
    return (
      <>
        <div className= "header">
        <img src={cvlogo} alt="covid-watch logo" />
        </div>
        <form onSubmit={this.Signup}>
          <label>
          Name:<br/>
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}></input>
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
            <input type="text" name="addressl1" value={this.state.addressl1} onChange={this.handleInputChange}></input>
          </label><br/>

          <label>
            Address Line 2:
            <input type="text" name="addressl2" value={this.state.addressl2} onChange={this.handleInputChange}></input>
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

