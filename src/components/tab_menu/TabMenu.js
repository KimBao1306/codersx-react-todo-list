import React from 'react';
import './TabMenu.css';

function TabMenu(props) {
	return (
		<ul>
			{props.items.map((item) => (
				<li>
					<a>
						<img src={item.icon} />
						<p>{item.label}</p>
					</a>
				</li>
			))}
		</ul>
	);
}

export default TabMenu;
