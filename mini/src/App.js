
import "./App.css";
import { Reset } from "styled-reset";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Mypage from "./Pages/Mypage";
import Detail from "./Pages/Detail";
import Main from "./Pages/Main";
import Post from "./Pages/Post";


function App() {
  return (
    <div className="App">
      <Reset />
        <Routes>
          <Route path="/main" element={<Main/>}/>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/detail" element={<Detail />} />
          <Route path="/post" element={<Post />} />
        </Routes>



      
    </div>
  );
}

export default App;
