import { BrowserRouter as Router, useLocation } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Sidebar from "./components/common/Aside";

//ルーディングの読み込み
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
