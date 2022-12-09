import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css"; 

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'User',
            image: '...',
            message: "What's up?"
        }, 
        {
            name: 'User',
            image: '...',
            message: "How's it going?" 
        },
        {
            message: "Pretty good!" 
        }
    ]);
    return  (
        <div className = "chatScreen">
            <p className = "chatScreen__timestamp">
            YOU MATCHED WITH USER ON 10/22/20
            </p>
            {messages.map((message)  =>
                message.name ? (
                    <div className = "chatScreen__message">
                        <Avatar
                            className = "chatScreen__image"
                            alt = {message.name}
                            src = {message.image}
                        />
                        <p className = "chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                 <div className = "chatScreen__message">
                    <p className = "chatScreen__textUser">{message.message}</p>
                </div>
                )
            )}
        </div>
    );
}

export default ChatScreen