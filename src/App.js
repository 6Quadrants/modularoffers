import React, { Component } from 'react';
import './App.css';

import { Row } from 'reactstrap';

import AllDescriptions from "./AllDescriptions";
// import Default from "./Default";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: [
                {
                    brandName: '',
                    brandDescription: ''
                },
                {
                    brandName: "Example info",
                    brandDescription: "Example info description"
                },
                {
                    brandName: "Different example",
                    brandDescription: "Different example info"
                }

            ]
        };
  
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        event.preventDefault();

        this.setState({
            offers: [
                {
                    brandName: event.target.value,
                    brandDescription: event.target.value
                }
            ] 
    })
}
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
      };



render() {

return (


<div>
    <div className="wrapper">
        
        <Row className="taskbar">
            <div className="taskbar-header">
                <h1 className="enter-offer">Enter Your Offer!</h1>
            </div>


            <form onSubmit={this.handleSubmit}>
            <label>
                {/* <h4 className="input-text">Brand Name</h4> */}
                    <input 
                        type="text"
                        placeholder="Brand Name"
                        value={this.state.offers.brandName}
                        onChange={this.handleChange}
                    />
            </label>
            <label>
                {/* <h4 className="input-text">Offer Description</h4> */}
                    <input 
                        type="text"
                        placeholder="Offer Description"
                        value={this.state.offers.brandDescription}
                        onChange={this.handleChange}
                    />
            </label>
            <button onClick={this.handleFormSubmit} className="btn cta" >
           
                <h3 className="button-text">SUBMIT</h3>
            </button>
            </form>    
        </Row>


        <div className="container">
            <div className="row">
            <AllDescriptions offers={this.state.offers} />
            </div>    
         </div> 

    </div>
</div> 

    );
  }
}

export default App;
