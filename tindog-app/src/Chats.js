import React from "react";
import "./Chats.css";
import Avatar from "@material-ui/core/Avatar";
import Chat from "./Chat"
function Chats(){
    return<div className = "chats">
        <Chat
        name ="Ruby"
        message ="Tailwag...Bark"
        timestamp ="10 seconds"
        profilePic = "https://publish.purewow.net/wp-content/uploads/sites/2/2021/07/big-dog-breeds-bull-mastiff.jpg?fit=728%2C524"
        />
        <Chat
        name ="Niko"
        message ="Growl..."
        timestamp ="40 seconds"
        profilePic = "https://scontent.cdninstagram.com/v/t1.15752-9/318228277_5687429374679682_5543898317899502930_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5a057b&_nc_ohc=QHWKVKYyTF0AX8nCz_S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AdSURZqLpWA74pa_uHGV86fjLQzZSI6aJNJwL5SW6CugbA&oe=63B715AF"
        />
    </div>
}
export default Chats