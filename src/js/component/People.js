import React, { useContext, useState, useEffect } from "react";
import "../../styles/index.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="people mt-5">
        <div className="row">
          <div className="card col">
            <img className="card-img-top" src="..."></img>
            <div className="card-body">
              <h5 className="card-title">
                <strong>Character Name:</strong> {props.name}
              </h5>
              <p className="card-text">
                <strong>Gender:</strong> {props.gender}
              </p>
              <p className="card-text">
                <strong>Height:</strong> {props.height}
              </p>
              <p className="card-text">
                <strong>Mass:</strong> {props.mass}
              </p>
              <p className="card-text">
                <strong>Birth Year:</strong> {props.birth_year}
              </p>
              <div className="row">
                <div className="col-6">
                  <Link to={`/PeopleDetails/${props.id}`}>
                    <div className="btn btn-primary">Learn More</div>
                  </Link>
                  <div className="col-6">
                    <Link onClick={() => actions.addFavorite(props.name)}>
                      <div className="btn btn-outline-warning">
                        <i className="fas fa-heart" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

People.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  birth_year: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
};
