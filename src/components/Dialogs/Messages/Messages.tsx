import React from "react";
import style from './../Dialogs.module.css'


type MessagePropsType = {
    message: string
}
const MessageItem = (props: MessagePropsType) => {


    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}


export default MessageItem;
