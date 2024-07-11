import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Blogs from "./pages/Blogs/Blogs";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import Admin from "./pages/Admin/Admin";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = JSON.parse(localStorage.getItem("user"));
        if (currentUser) {
          const response = await fetch("http://127.0.0.1:5000/api/auth/user", {
            method: "GET",
            headers: {
              "x-auth-token": currentUser.token,
            },
          });
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Blogs />} />
          {user ? (
            <>
              <Route path="/*" element={<Admin email={user.email}/>} />
            </>
          ) : (
            <>
              <Route path="/*" element={<Login />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
