import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./layout/AppLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/LoginPage/Login";
import PrivateRoute from "./route/PrivateRoute";
import loginStore from "./stores/loginStore";

function App() {
  
  const {authenticate, login, logout} = loginStore();

  return (
    <div className="full-container">
      <Routes>
        <Route path="/" element={<AppLayout authenticate={authenticate} login={login} />}>
          <Route index element={<HomePage />} />

          <Route path="/login" element={<Login login={login}/>} />
          <Route path="/mybook" element={<PrivateRoute authenticate={authenticate}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
