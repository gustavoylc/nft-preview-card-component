import React from "react";

export const CardMedia = ({
	image,
	alt,
	height,
	width,
	viewImage,
}) => {
	return (
		<figure className="card-media-container">
			<img
				className="card-media-container__image"				
				src={image}
				alt={alt}
				height={height}
				width={width}
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
