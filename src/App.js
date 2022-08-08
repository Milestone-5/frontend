import "./App.css";
import Navbar from "./components/Navbar";
import RoutesConfig from "./RoutesConfig";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("user", null);
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <Navbar user={user} logout={logout} />
      <main>
        <RoutesConfig user={user} />
      </main>
    </>
  );
}

export default App;
