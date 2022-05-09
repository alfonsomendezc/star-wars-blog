import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="navbar-logo" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG18.png"></img>
			</Link>
			<div className="col-6 col-lg-3">
			<div className="d-inline nav-item dropdown ">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<card>
								<ul className="list-group list-group-flush">
									<div>
										<p className="mb-0">
											{store.favorites.length === 0 ? (
												<small className="text-muted pl-2">(empty)</small>
											) : (
												store.favorites.map((favorite, listIndex) => {
													return (
														<li
															className="list-group-item d-flex justify-content-between p-2"
															key={listIndex}>
															{favorite.name}
															<span
																className="ml-4"
																onClick={() => actions.deleteFavorite(favorite.id)}>
																<i className="fas fa-times" />
															</span>
														</li>
													);
												})
											)}
										</p>
									</div>
								</ul>
							</card>
						</div>
				</div>
				</div>
		</nav>
	);
};
