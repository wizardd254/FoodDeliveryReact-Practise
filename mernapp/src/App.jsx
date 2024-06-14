import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
