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
                  src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755"
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
                  <Link to="/people/people:id">
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
