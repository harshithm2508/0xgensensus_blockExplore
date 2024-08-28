import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlockExplorer from "./pages/blockExplorer";
import Dashboard from "./pages/dashboard";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/explorer" element={<BlockExplorer/>}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;