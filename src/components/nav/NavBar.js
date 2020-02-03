// Authored by Holden Parker
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import NavLink from "./NavLink"


export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <NavLink to="/" {...props}>Home</NavLink>    
            </li>
            <li className="navbar__item">
                <NavLink to="/news" {...props}>News</NavLink> 
            </li>
            <li className="navbar__item">
                <NavLink to="/events" {...props}>Events</NavLink> 
            </li>
            <li className="navbar__item">
                <NavLink to="/tasks" {...props}>Tasks</NavLink> 
            </li>
            <li className="navbar__item">
                <NavLink to="/friends" {...props}>Add Friends</NavLink> 
            </li>

            {
                localStorage.getItem("activeUser")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("activeUser")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

{/* <Link className="navbar__link" to="/">Home</Link> */}