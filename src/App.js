import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddressBookForm from './component/formPage/AddressBookForm';
import AddressBookHome from './component/homePage/AddressBookHome';
import logo from './asset/icons/logo.png';

function App() {
	return (
		<div className="App">
			<header className="header-content header">
				<div className="logo-content">
					<img src={logo} alt="" />
					<div>
						<span className="emp-text">ADDRESS</span>
						<br />
						<span className="emp-text emp-payroll">BOOK</span>
					</div>
				</div>
			</header>
			<Routes>
				<Route path="/" element={<AddressBookHome />} />

				<Route path="/form" element={<AddressBookForm />} />
			</Routes>
		</div>
	);
}

export default App;
