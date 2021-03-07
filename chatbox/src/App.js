
import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';

class App extends Component {
   
  
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo,
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }
  
  render() {
      const messages = Object.keys(this.state.messages).map(key => (
        <Message 
        message={this.state.messages[key].message}
        pseudo={this.state.messages[key].pseudo}
        />
      ))

        return (
           <div className="box">
                <div className="messages">
                  { messages }
                </div>
                <Formulaire
                length={150}
                addMessage={this.addMessage}
                pseudo={this.state.pseudo} />
           </div>
        );
    }
}

export default App;