import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="navbar-logo" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG18.png"></img>
			</Link>
			<div className="ml-auto favorites-nav">
				Favorites
				// //
			</div>
		</nav>
	);
};
