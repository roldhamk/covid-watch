import React, { Component } from 'react'
import "./Dropdown.css"

export default class Dropdown extends Component {

    state = {
        displayMenu: false
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }


      hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }

    render() {
        return (
            <div  className="dropdown" style = {{background:"white",width:"100%"}} >
            <div className="button" onClick={this.showDropdownMenu}> Filter </div>
   
             { this.state.displayMenu ? (
             <ul>
            <li><a className="active" href="#Nearest">Nearest</a></li>
            <li><a href="#Random">Random</a></li>
            
             </ul>
           ):
           (
             null
           )
           }
   
          </div>
   
        )
    }
}
