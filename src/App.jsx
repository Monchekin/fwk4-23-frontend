import { Home } from 'fwk-4-components';
import { Login } from 'fwk-4-components';
import { Profile } from 'fwk-4-components';
import { Register } from 'fwk-4-components';
import { Workspace } from 'fwk-4-components';
import Footer from './footer/Footer';

function App() {
	return (
		<>
			<div>
				<h1>Hej, kul att du hittade hit!</h1>
				<p>Det vi har att erbjuda här är:</p>
				<Home />
				<hr />
				<Login />
				<hr />
				<Profile />
				<hr />
				<Register />
				<hr />
				<Workspace />
				<Footer />
			</div>
		</>
	);
}

export default App;
