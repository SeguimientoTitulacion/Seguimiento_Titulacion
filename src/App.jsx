import { Routes, Route } from "react-router-dom";

import { Login } from "./routes/login/login.component";
import { Register } from "./routes/register/register.conponent";
import { Account } from "./routes/account/account.component";
import Home from "./routes/home/home.component";

import Students from "./routes/students/Students";
import Status from "./routes/status/Status";

import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/protected-route/protected-route.component";
import Stats from "./routes/stats/Stats";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<Students />} />
          <Route path="account" element={<Account />} />
          <Route path="status" element={<Status />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
