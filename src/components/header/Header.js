import React from 'react';
import './Header.css';

function Header() {
	return (
		<header>
			<ul>
				<li>
					<a href="#">
						<img src="https://cdn.glitch.com/db790394-0ffa-4aa6-8828-4903e58227e2%2Fleft-arrow.png?v=1589271190972" />
						Go Back
					</a>
				</li>
				<li>
					<img src="https://cdn.glitch.com/db790394-0ffa-4aa6-8828-4903e58227e2%2Fcodersx2.png?v=1589216921504" />
				</li>
				<li>
					<a href="#">Sign up</a>
				</li>
			</ul>
		</header>
	);
}

export default Header;
