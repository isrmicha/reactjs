import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container">
  <div class="row">

    {[...Array(100)].map((i)=>
        <div class="col-sm-12 col-md-6 col-lg-4">
  <CardExample/>
  </div>
    )}
      
    
    
     
   
    
    
  </div>
</div>
    );
  }
}

class CardExample extends React.Component {
  render() {
    return (<div class="card text-white bg-primary mb-3" >
    <div class="card-header">Header</div>
    <div class="card-body">
      <h5 class="card-title">Primary card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    );
  }
}



export default App;
