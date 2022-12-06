import React from "react";
import "./Chats.css";
import Avatar from "@material-ui/core/Avatar";
import Chat from "./Chat"
function Chats(){
    return<div className = "chats">
        <Chat
        name ="Niko"
        message ="Tailwag...Bark"
        timestamp ="10 seconds"
        profilePic = "https://publish.purewow.net/wp-content/uploads/sites/2/2021/07/big-dog-breeds-bull-mastiff.jpg?fit=728%2C524"
        />
        <Chat
        name ="Ruby"
        message ="Growl..."
        timestamp ="40 seconds"
        profilePic = "https://publish.purewow.net/wp-content/uploads/sites/2/2021/07/big-dog-breeds-bull-mastiff.jpg?fit=728%2C524"
        />
    </div>
}
export default Chats