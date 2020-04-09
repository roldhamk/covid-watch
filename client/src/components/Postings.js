import React, { Component } from 'react'

export default class Postings extends Component {
  state = {
    selectedOption : "shopping",
    title: "",
    description: "",
    postcode: ""
  }


  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };


  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state);
  };

  // use it when server side has been updated
  // createPostings = async(event) => {
  //   event.preventDefault();
  //   let response = await fetch('http://localhost:3000/Postings', {
  //     method: 'post',
  //     body: JSON.stringify(this.state),
  //     headers: {"Content-Type": "application/json"}
  //   });
  //   console.log(await response.json());

  //     //response = await response.json();
  //     //if(response.e)

  // }

  render() {

    return (

       <div className="wholePostingsBody">
      <h1>Post your Request:</h1>
      <h2>Please include as much information as you can</h2>
      {/* onSubnit={this.createPostings} */}
      <form onSubmit={this.handleFormSubmit} >
        <label>
          Title:
          <br></br>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}placeholder="Give a brief idea of what you need" />
        </label>
        <br></br>
        <label>
          Description:
          <br></br>
          <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Make sure you include all the information, someone needs to deal with your request. For example if you need something picking up from somewhere specific include the location, or if you have any food allergies" />
        </label>
        <br></br>
        <label>
          Category
          <div className="radio">
      <label>
      Shopping
        <input type="radio" value="shopping" checked={this.state.selectedOption === "shopping"} onChange={this.handleOptionChange} />
      </label>
    </div>
    <div className="radio">
      <label>
      Medicine
        <input type="radio" value="medicine" checked={this.state.selectedOption === "medicine"} onChange={this.handleOptionChange} />
      </label>
    </div>
    <div className="radio">
      <label>
      Meals
        <input type="radio" value="meals"checked={this.state.selectedOption === "meals"} onChange={this.handleOptionChange}/>
      </label>
      <div className="radio">
      <label>
      Just a Chat
        <input type="radio" value="chat" checked={this.state.selectedOption === "chat"} onChange={this.handleOptionChange}/>
      </label>
      </div>
    </div>
        </label>
        <label>
          Postcode:
          <br></br>
          <input type="text" name="postcode" value={this.state.postcode} onChange={this.handleInputChange} placeholder="Postcode"/>
        </label>
        <br></br>
        <button type="submit" name="send">SEND</button>

        
      </form>

    </div>
    )
  }
}

