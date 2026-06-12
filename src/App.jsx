import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Resourcescontent from "./components2/Resourcescontent.jsx";
import Recordingscontent from "./components2/Recordingscontent.jsx";
import Account from "./components2/Account.jsx";
import { Toaster } from "sonner";

function App() {
  return (
    <div>
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
      <Toaster />
    </div>
  );
}

export default App;
