import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Home from "./Pages/Home";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Display from "./Pages/display";

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="home" element={<Home />} />
          <Route path="display" element={<Display/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
