//라우팅
import { Routes, Route } from "react-router-dom";
//페이지
import Detail from "./Pages/Detail";
import Main from "./Pages/Main";
import Post from "./Pages/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/post" element={<Post />} />
        <Route path="/main" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
