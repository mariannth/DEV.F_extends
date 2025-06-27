import React from "react";
import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Counter"}>Counter</Link>
            </li>
            <li>
                <Link to={"/FilterableList"}>Filterable List</Link>
            </li>
            <li>
                <Link to={"/Timer"}>Timer</Link>
            </li>
            <li>
                <Link to={"/User/20"}>User</Link>
            </li>
        </ul>
    )
}