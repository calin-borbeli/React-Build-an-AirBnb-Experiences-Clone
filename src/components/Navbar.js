import navLogo from "../images/airbnb-logo.png";
const Navbar = () => {
	return (
		<nav className="navbar">
			<img src={navLogo} alt="logo" className="nav--logo" />
		</nav>
	);
};
export default Navbar;
