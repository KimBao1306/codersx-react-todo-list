import React from 'react';
import './RecommendedFriends.css';

function RecommendedFriends(props) {
	return (
		<div className="recommended">
			<div className="recommended-title">
				<p>Gợi ý cho bạn</p>
				<p>
					<a href="#">Xem tất cả</a>
				</p>
			</div>

			{props.friends.map((f) => (
				<FollowFriendListItem user={f} />
			))}
		</div>
	);
}

function FollowFriendListItem(props) {
	return (
		<div className="recommended-item">
			<div className="recommended-item-info">
				<div>
					<img
						className="recommended-img"
						src={props.user.img}
						alt="recommended friend"
					/>
				</div>
				<div className="recommended-name">
					<p>{props.user.name}</p>
					<p>Gợi ý cho bạn</p>
				</div>
			</div>
			<div className="recommended-item-follow">
				<a href="#">Theo dõi</a>
			</div>
		</div>
	);
}

export default RecommendedFriends;
