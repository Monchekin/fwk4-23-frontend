import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Home } from 'fwk-4-components';
// import { Login } from 'fwk-4-components';
//import { Profile } from 'fwk-4-components';
//import { Register } from 'fwk-4-components';
//import { Workspace } from 'fwk-4-components';
import Footer from './footer/Footer';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ProfilePage from './pages/profile/ProfilePage';
import HomePage from './pages/home/HomePage';

function App() {
	return (
		<>
		<BrowserRouter>
			<Routes>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/register" element={<RegisterPage />}></Route> 
			<Route path="/profile" element={<ProfilePage />}></Route> 
			<Route path="/home" element={<HomePage />}></Route> 	 
			</Routes>
		</BrowserRouter>
		<Footer />
		</>
	);
}

export default App;


{/* 
<Workspace />
 */}