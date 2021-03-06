import React, { Component } from 'react';
import './App.css';

class App extends Component {


  
  render() {
    return (
      <div className="connexionBox">
             <form className="connexion">
             <input 
             placeholder="Pseudo"
             type="text"
             required />
             <button type="submit">Go</button>
             </form>
           </div>
    );
  }
}

export default App;




