import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './footer/Footer';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ProfilePage from './pages/profile/ProfilePage';
import HomePage from './pages/home/HomePage';
import WorkspacePage from './pages/workspace/WorkspacePage';

//example: to display Loginpage - route to /login

function App() {
	return (
		<>
		<BrowserRouter>
			<Routes>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/register" element={<RegisterPage />}></Route> 
			<Route path="/profile" element={<ProfilePage />}></Route> 
			<Route path="/home" element={<HomePage />}></Route> 
			<Route path="/workspace" element={<WorkspacePage />}></Route> 	 
			</Routes>
		</BrowserRouter>
		<Footer />
		</>
	);
}

export default App;