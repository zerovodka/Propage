//라우팅
import { Routes, Route } from "react-router-dom";
//페이지
import Detail from "./Pages/Detail";
import Post from "./Pages/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
