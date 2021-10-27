import React from "react";
import style from './../Dialogs.module.css'
import classes from "./../../NavBar/NavBar.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string;
    id: number
}
const Dialog = (props: DialogPropsType) => {
    return (
        <div className={style.dialog + " " + style.active}>
            <NavLink to={'./Dialogs/' + props.id} activeClassName={classes.activeLink}>
                {props.name}
            </NavLink>
        </div>
    )
}


export default Dialog;
