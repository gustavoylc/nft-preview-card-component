import React from "react";
import clockIcon from "@images/icon-clock.svg";
import ethIcon from "@images/icon-ethereum.svg";

export const CardContent = ({ children }) => {
	return (
		<div className="card-content-container">
			<h1 className="card-content-container__title">
				<a
					className="card-content-container__title__nft-id"
					href="#"
				>
					Equilibrium #3429
				</a>
			</h1>
			<p className="card-content-container__description">
				Our Equilibrium collection promotes balance and calm.{" "}
			</p>
			<div className="card-content-container__pricing">
				<div className="card-content-container__pricing__price-container">
					<img
						className="card-content-container__pricing__price-container__eth-icon"
						src={ethIcon}
						alt="eth icon"
					/>
					<p>0.041 ETH</p>
				</div>
				<div className="card-content-container__pricing__time-container">
					<img
						className="card-content-container__pricing__time-container__clock-icon"
						src={clockIcon}
						alt="clock icon"
					/>
					<p>3 days left</p>
				</div>
			</div>
			<hr className="card-content-container__line"></hr>
			{children}
		</div>
	);
};
