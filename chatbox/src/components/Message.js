import React from 'react';

const Message = ({ message, pseudo, isUser }) => {

    if (isUser(pseudo)) {
        return (
            <p className="user">
             { message } : moi
            </p>
        );
    }
    else{
        return (
            <div className="notUser">
            <p className="no-user">
                <strong>{pseudo}: </strong>{message}
            </p>
            </div>
        );
    }
};

export default Message;