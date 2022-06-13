
import "./App.css";
import { Reset } from "styled-reset";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Detail from "./Pages/Detail";
import Post from "./Pages/Post";


function App() {
  return (
    <div className="App">

      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/detail" element={<Detail />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>


        

    </div>
  );
}

export default App;
