import { useState } from "react";
import { io } from "socket.io-client";
import Chat from './Chat'

const socket = io.connect("http://localhost:3001");

const ChatLogin = () => {
    const [ userName, setUsername ] = useState(null);
    const [ roomId, setRoomId ] = useState(null);
    const [ isChatActive, setIsChatActive ] = useState(false);

    const joinRoom = () => {
        if (userName !== "" && roomId !== ""){
            socket.emit("join_room", roomId);
            setIsChatActive(true);
        }
    };

    return (<div>
        {!isChatActive ? (
            <div className="joinChatContainer">
              <h3>Join A Chat</h3>
              <input
                type="text"
                placeholder="John..."
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Room ID..."
                onChange={(event) => {
                  setRoomId(event.target.value);
                }}
              />
              <button onClick={joinRoom}>Join A Room</button>
            </div>) : (<Chat socket={socket} userName={userName} roomId={roomId} />)}
            </div>
    );
}
 
export default ChatLogin;