import React from "react";
import style from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div className={style.contentImg}>
                <img
                    src="https://image.shutterstock.com/image-photo/open-ocean-260nw-583242265.jpg"
                    alt=""/>
            </div>
            <img className={style.avaImg}
                 src="https://i.pinimg.com/originals/93/4f/f2/934ff23b3fdf4c0fbfc1e505b6680b5a.jpg"
                 alt=""/> 
        </div>

    )
}

export default ProfileInfo;
