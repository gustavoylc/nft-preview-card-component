import React from "react";

export const CardMedia = ({
	image,
	alt,
	height,
	width,
	border,
	borderRadiusRounded,
	viewImage,
}) => {
	return (
		<figure className="card-media-container">
			<img
				className={` ${
					borderRadiusRounded
						? "card-media-container__image__avatar"
						: "card-media-container__image"
				}`}
				src={image}
				alt={alt}
				height={height}
				width={width}
				border={border}
			/>			
			<figure className="card-media-container__image-eye">
				<img
					src={viewImage}
					alt="Icon View"
				/>
			</figure>			
		</figure>
	);
};
