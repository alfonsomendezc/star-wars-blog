import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
    let { type, id } = useParams()
    const [details, setDetails] = useState({})
    const { action, store } = useContext(Context)

    useEffect(() => {
        let array = [...store[`${type}`]];
        let element = array.filter((value, index) => index==id);

        setDetails(element);

    },[])
    return (
        <>
        </>
    );
};