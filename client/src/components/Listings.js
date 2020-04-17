import React, { Component } from "react";
import "./Listings.css"

export class Listings extends Component {
  
  state = { 
    data: [],
    searchString:[],
    selectedOption: ''
  }

  componentDidMount = () => {
      this.getData()
  }


  takeOfferButton = () => {
    //console.log("button is working");
    alert("You have chosen this offer!")
    
}

  handleInputChange = (event) => {


    console.log(this.state.selectedOption);
    console.log(this.state.data);
    
    

    
        // console.log(responseData[i].name);
     
    

      this.setState({
          selectedOption: event.target.value
      })
  };

  

  getData = () => {
      fetch(`http://localhost:3001/Listings`)
      .then(response => response.json())
      .then(responseData => {
          console.log(responseData)
          this.setState({
              data:responseData,
              searchString:responseData
          })
      })
  }


  render() {
    console.log(this.state.data);
    let filteredData = this.state.data.filter(data => {
      for(let i =0; i < this.state.data.length; i++) {
        
        //console.log(data.selectedOption.indexOf(this.state.selectedOption) > - 1);
        return data.selectedOption.indexOf(this.state.selectedOption) > - 1;
      }
    })
    //console.log(filteredData);


    const searchedCategories = filteredData.map( category => {
      console.log(category);


      return(
      //   <div>
      //     <h1>Job name: {category.selectedOption}</h1>
      // <p>Location/Postcode: {category.postcode}</p>
      //     <h1>Description: {category.description}</h1>
      //   </div>

        <div>
    
        <div className="cardInfo">
        <h3 className="c3">Title: {category.title}</h3>
        <h4 className="c5">Postcode: {category.postcode}</h4>
        <p className="description1">Description: {category.description}</p>
        <div className="cateNupp">
        <h4>Job Name: {category.selectedOption} </h4>
        <button className="nupp" onClick={this.takeOfferButton}>Take the offer</button>
        </div>
        </div>
        </div>


      )
    })



    return (
      
      <div>
           <div className="searchForm">
             
            <form>
            <div className="searchIn">
                <input type="text" id="filter" placeholder="Search for..."  onChange={this.handleInputChange} />
                {/* <ion-icon name="search-outline"></ion-icon> */}
                </div>
            </form>
            
           <p className="searchT">*You can search: shopping, medicine, meals or just a chat</p>
            {searchedCategories}
        </div>
        
      </div>
    )
  }
}

export default Listings;
