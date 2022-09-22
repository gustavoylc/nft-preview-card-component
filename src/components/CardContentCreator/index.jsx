import React from "react";
import { CardMedia } from "@components/CardMedia";
import avatar from "@images/image-avatar.png";

export const CardContentCreator = () => {
	return (
		<div className="card-content-creator-container">
			<CardMedia
				image={avatar}
				alt="avatar"
				height="33px"
				width="40px"
				border="1px solid white"
				borderRadiusRounded={true}
			/>
			<p className="card-content-creator-container__owner">
				Creation of{" "}
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
