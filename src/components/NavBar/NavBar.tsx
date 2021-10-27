import React from "react";
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (

        <nav className={classes.nav}>
            <div className={classes.links}>
                <div className={classes.item}>
                    <NavLink to="./../Profile/Profile" activeClassName={classes.activeLink}> Profile </NavLink>
                </div>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to="./../Dialogs/Dialogs" activeClassName={classes.activeLink}> Messages </NavLink>
                </div>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to="./../News/News" activeClassName={classes.activeLink}> News </NavLink>
                </div>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to="./../Music/Music" activeClassName={classes.activeLink}> Music </NavLink>
                </div>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to='./../Settings/Settings' activeClassName={classes.activeLink}> Settings </NavLink>
                </div>
            </div>
        </nav>


    )
}

export default NavBar;