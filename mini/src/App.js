import "./App.css";
import { Reset } from "styled-reset";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Mypage from "./Pages/Mypage";
import Detail from "./Pages/Detail";
import Post from "./Pages/Post";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Reset />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
