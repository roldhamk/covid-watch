import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';


class Form extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  }
  checkUser = async (event) => {
    event.preventDefault()

    console.log(this.state)

    let response = await fetch("http://localhost:3000/", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: {"Content-Type": "application/json"}
    })

    console.log(await response.json())
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }


  render() {
    return (
      <>
        <form onSubmit={this.checkUser}>
          <label>
          Username or Email:
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}></input>
          </label><br/>

          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
          </label><br/>

          <Link to="/Postings">
              <input type="submit" value= "Log In" className="submit"></input>
          </Link>

        </form>
      </>
    )
  }
}
export default Form;

