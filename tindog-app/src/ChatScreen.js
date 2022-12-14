
import React, {useState} from 'react';
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar";

    function ChatScreen () {
        const [input, setInput] = useState('');
        const [messages, setmessages] = useState([
        {
            name: "Niko",
            image: "https://scontent.cdninstagram.com/v/t1.15752-9/318228277_5687429374679682_5543898317899502930_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5a057b&_nc_ohc=QHWKVKYyTF0AX8nCz_S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AdSURZqLpWA74pa_uHGV86fjLQzZSI6aJNJwL5SW6CugbA&oe=63B715AF",
            message: "Bark..bark?",
        },
        {
            message: "woof! pant",
        },
    ])

    const handleSend = e => {
        e.preventDefault();
        setmessages([...messages, {message: input}]);
        setInput('');
    }

        return(
            <div className = "chatScreen">
               <p className= "chatScreen_timestamp">You Matched With Niko On 11/08/22</p>
               {messages.map((message) => 
                message.name ?(
                   <div className="chatScreen_message">
                    <Avatar
                        class_Name="chatScreen_image"
                        alt = {message.name}
                        src = {message.image}
                    />
                    <p className="chatScreen_text"> {message.message}</p>
        
                </div> 
                ): (
                    <div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                ))}
                
                    <form className='chatScreen__input'>
                        <input 
                        className = 'chatScreen__inputField'
                        value={input}
                        onChange = {(e) => setInput(e.target.value)}
                        type="text" placeholder='Type your message..woof!'/>
                        <button onClick={handleSend} type="submit" className='chatScreen__inputButton'>SEND</button>
                    </form>
                
            </div>
            
        )
    }


    export default ChatScreen