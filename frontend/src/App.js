import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages";

function App() {
  return (
    <HashRouter base="">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
