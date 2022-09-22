import React from "react";
import avatar from "@images/image-avatar.png";

export const CardContentCreator = () => {
	return (
		<div className="card-content-creator-container">			
			<img
				className="card-content-creator-container__avatar"
				src={avatar}
				alt="avatar"
			/>
			<p className="card-content-creator-container__owner">
				Creation of
				<a
					className="card-content-creator-container__owner__name"
					href="#"
				>
					Jules Wyvern
				</a>
			</p>
		</div>
	);
};
