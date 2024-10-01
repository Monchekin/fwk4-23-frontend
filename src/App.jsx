import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import HomePage from "./pages/home/HomePage";
import WorkspacePage from "./pages/workspace/WorkspacePage";
import Navbar from "./navbar/Navbar";
// import { Header } from "@niklaspelli/fwk4-23-components";
import {PublicHeader} from "@niklaspelli/fwk4-23-components";
import {PrivateHeader} from "@niklaspelli/fwk4-23-components";

function App() {
  const location = useLocation();

  const isPublicPage =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {isPublicPage ? <PublicHeader /> : <PrivateHeader />} 
      
      {!isPublicPage && <Navbar />} 
      
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/workspace" element={<WorkspacePage />}></Route>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;