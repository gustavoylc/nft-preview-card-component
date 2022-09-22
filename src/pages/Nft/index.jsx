import React from "react";
import { Card } from "@components/Card";

export const Nft = () => {
	return (
		<div className="layout">
			<main>
				<section>
					<Card />
				</section>
			</main>
			<footer className="footer">
				<div className="footer__attribution">
					Challenge by{" "}
					<a
						className="footer__attribution__a"
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
						rel="noreferrer"
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a
						className="footer__attribution__a"
						href="https://www.frontendmentor.io/profile/gustavoylc"
					>
						Gustavo Leyte-Vidal
					</a>
					.
				</div>
			</footer>
		</div>
	);
};
