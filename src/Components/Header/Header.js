import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Icons from '../Icons/Icons';
import { Link } from 'react-router-dom'
import Auth from '../Auth/Auth'
import CartLink from '../CartLink/CartLink';

function Header() {
	return (
		<header className="Header">
			{/* <div class="Header_br"></div> */}
			<div className="container">

				<div className="Head flex">
					<Logo />
					<Menu />
					<Icons />
		<Auth />

					<Link to="/cart" className="Cart_ic">
						<span>
							<a href="#">
								</a>

							<CartLink />

						</span>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;