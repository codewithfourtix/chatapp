import { useState, useRef } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <h1>
        <Auth setIsAuth={setIsAuth} />
      </h1>
    );
  }
  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div>
          <label>Enter room name:</label>
          <input type="text" ref={roomInputRef} />
          <button
            onClick={() => {
              setRoom(roomInputRef.current.value);
            }}
          >
            Enter Chat
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
