import React from 'react';

const Message = ({ message, pseudo }) => {
    return (
        <p className="user">
         { message }
        </p>
    );
};

export default Message;