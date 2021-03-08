
import React, { Component, createRef } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';

import base from './base'

class App extends Component {
   
  
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo,
  }

  messagesRef = createRef()

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    Object.keys(messages).slice(0, -15).forEach(key => {
        messages[key] = null
    })
    
    
    this.setState({ messages })
  }

  isUser = pseudo => pseudo === this.state.pseudo
  
  render() {
      const messages = Object.keys(this.state.messages).map(key => (
        <Message 
        isUser={this.isUser}
        key={key}
        message={this.state.messages[key].message}
        pseudo={this.state.messages[key].pseudo}
        />
      ))

        return (
           <div className="box">
              <h1 className="titleform">Chat-DN</h1>
                <div className="messages" ref={this.messagesRef}>
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