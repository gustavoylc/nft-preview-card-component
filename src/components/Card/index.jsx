import React from "react";
import { CardMedia } from "@components/CardMedia";
import { CardContent } from "@components/CardContent";
import { CardContentCreator } from "@components/CardContentCreator";
import etheriumimage from "@images/image-equilibrium.jpg"
import iconView from "@images/icon-view.svg"

export const Card = () => {
	return (
		<article className="card-container">
			<CardMedia
				image={etheriumimage}
				viewImage={iconView}
				alt="nft image"
			/>
			<CardContent>
				<CardContentCreator />
			</CardContent>
		</article>
	);
};
