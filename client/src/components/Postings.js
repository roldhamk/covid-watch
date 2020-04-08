import React, { Component } from 'react'
import "./Postings.css"
import cvlogo from "./images/Logo.png";

export default class Postings extends Component {
  state = {
    selectedOption : "shopping",
    title: "",
    description: "",
    postcode: ""
  }

  createPostings = async(event) => {
    event.preventDefault();
    let response = await fetch('http://localhost:3000/Postings', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {"Content-Type": "application/json"}
    });
    console.log(await response.json());

  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };


  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    
  }

  

  sendButton = () => {
    console.log("Add button is working")
    if (this.state.title === "") {
      alert("Please enter title")
    }
    else if (this.state.description === "") {
      alert("Please enter description")
    }
    else if (this.state.postcode === "") {
      alert("Please enter a postcode")
    } else {
      alert("Thank you for your POST")
      this.setState({
        title: "",
        description: "",
        postcode: ""
      })
    }
  }

  // handleFormSubmit = formSubmitEvent => {
  //   formSubmitEvent.preventDefault();

  //   console.log("You have submitted:", this.state.selectedOption, this.state.title);
  // };



  render() {

    return (
      <>
      <div className= "header">
        <img src={cvlogo} alt="covid-watch logo" />
        </div>

       <div className="wholePostingsBody">
      <h1>Post your Request:</h1>
      <h2>Please include as much information as you can</h2>
     
      <form id="formForm" onSubmit={this.createPostings} >
        <label>
          <div className="titleDiv">
          Title:
          </div>
          <br></br>
          <input className="title" type="text" name="title" value={this.state.title} onChange={this.handleInputChange}placeholder="Give a brief idea of wath you need" />
        </label>
        <br></br>
        <label>
          <div className="descriptionDiv">
          Description:
          </div>
          <br></br>
          <textarea  form="formForm" className="description" type="text" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Make sure you include all the information, someone needs to deal with your request. For example if you need something picking up from somewhere specific include the location, or if you have any food allergies" />
        </label>
        <br></br>
        <div className="radioButtons">
        <label>
          <div className="categoryDiv">
          Category
          </div>
      <label>
      <div className="cat1">
      Shopping
      <div className="radioRing1">
        <input type="radio" value="shopping" checked={this.state.selectedOption === "shopping"} onChange={this.handleOptionChange} />
        </div>
        </div>
      </label>
   
    
      <label>
      <div className="cat1">
      Medicine
      <div className="radioRing2">
        <input type="radio" value="medicine" checked={this.state.selectedOption === "medicine"} onChange={this.handleOptionChange} />
        </div>
        </div>
      </label>
    
    
      <label>
      <div className="cat1">
      Meals
      <div className="radioRing3">
        <input type="radio" value="meals"checked={this.state.selectedOption === "meals"} onChange={this.handleOptionChange}/>
        </div>
        </div>
      </label>
     
      <label>
      <div className="cat1">
      Just a Chat
      <div className="radioRing4">
        <input type="radio" value="chat" checked={this.state.selectedOption === "chat"} onChange={this.handleOptionChange}/>
        </div>
        </div>
      </label>
      
    
        </label>
        </div>
        <label>
          <div className="postcodeDiv">
          Postcode:
          </div>
          <br></br>
          <input className="postcode" type="text" name="postcode" value={this.state.postcode} onChange={this.handleInputChange} placeholder="Postcode"/>
        </label>
        <br></br>
        <button className="postingsButton" type="submit" name="send" onClick={this.sendButton}>POST</button>

        
      </form>

    </div>
    </>
    )
  }
}

