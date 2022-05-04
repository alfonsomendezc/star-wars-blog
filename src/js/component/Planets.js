import React from "react";
import "../../styles/index.css";
import { Link } from "react-router-dom";

export const Planets = ({ data }) => {
  return (
    <>
      <div className="people mt-5">
      <h2 className="title">Planets</h2>
        <div className="row">
          {data.map((planets, index) => {
            return (
              <div className="card col" key={index}>
                <img
                  className="card-img-top"
                  src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{planets.name}</h5>
                  <p className="card-text">
                    <strong>Diameter:</strong> {planets.diameter}
                  </p>
                  <p className="card-text">
                    <strong>Climate:</strong> {planets.climate}
                  </p>
                  <p className="card-text">
                    <strong>Mass:</strong> {planets.population}
                  </p>
                  <div className="learnmore-button">
                  <Link to="/planets/planets:id">
                    <a href="#" className="btn btn-outline-primary">Learn More!</a>
                  </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};