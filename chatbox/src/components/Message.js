import React from 'react';

const Message = ({ message, pseudo, isUser }) => {

    if (isUser(pseudo)) {
        return (
            <p className="user">
             { message } 
            </p>
        );
    }
    else{
        return (
        
            <p className="no-user">
                <strong>{pseudo}: </strong>{message}
            </p>
        
        );
    }
};

export default Message;