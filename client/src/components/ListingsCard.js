import React, { Component } from 'react'
import "./ListingsCard.css"
import DropDown from "./Dropdown"
import Listings from './Listings'

export default class ListingsCard extends Component {

    state ={
        displayCard: false,

    }

    takeOfferButton = () => {
        //console.log("button is working");
        alert("You have chosen this offer!")
        
    }
    render() {

        return (

            <div>
                <Listings />
                <DropDown />
                
                <div className="cardInfo">
        <h3>Job Name:{this.props.selectedOption}</h3>
        <p>Location/Postcode:{this.props.postcode}</p>
        <p className="description1">Description: {this.props.description}asfjSHGDSHGLSKGHKSLGH;gh;DGH;S OSDGHLDSGHDSKGHDSKGH OSGHDOSDHGSDHGODSG SODHGOS;DHGOS;DGHSDOGH SFKHGOSG <button>Read more</button></p>
        <div className="cateNupp">
        <p>Category:</p>
        <button className="nupp" onClick={this.takeOfferButton}>Take the offer</button>
        </div>
        </div>



            </div>
        )
    }
}
