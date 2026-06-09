import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Main from "./components/Main.jsx";
import Mission from "./components/Mission.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Resourcescontent from "./components2/Resourcescontent.jsx";
import Recordingscontent from "./components2/Recordingscontent.jsx";
import Account from "./components2/Account.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Resourcescontent" element={<Resourcescontent />} />
          <Route path="/Recordingscontent" element={<Recordingscontent />} />
          <Route path="/Account" element={<Account />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
