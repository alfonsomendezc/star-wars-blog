import React from "react";
import "../../styles/index.css";
import { Link } from "react-router-dom";

export const People = ({ data }) => {
  return (
    <>
      <div className="people mt-5">
        <h2 className="title">People</h2>
        <div className="row">
          {data.map((people, index) => {
            return (
              <div className="card col" key={index}>
                <img
                  className="card-img-top"
                  src="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{people.name}</h5>
                  <p className="card-text">
                    <strong>Gender:</strong> {people.gender}
                  </p>
                  <p className="card-text">
                    <strong>Height:</strong> {people.height}
                  </p>
                  <p className="card-text">
                    <strong>Mass:</strong> {people.mass}
                  </p>
                  <p className="card-text">
                    <strong>Birth Year:</strong> {people.birth_year}
                  </p>
                  <div className="learnmore-button">
                  <Link to="/:type/:id">
                    <div className="btn btn-outline-primary">Learn More!</div>
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
