import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Contacts/Contacts";
import MessageItem from "./Messages/Messages";



type DialogPropsType= {
    dialogs: any,
        messages: any
}
const Dialogs = (props:DialogPropsType) => {

    let dialogsElements = props.dialogs.map(d =>
        <Dialog name={d.name} id={d.id}/>)


    let messagesElements = props.messages.map(m =>
        <MessageItem message={m.message}/>)

    return (
        <div className={style.content}>
            <div className={style.dialog_item}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>

    );
}

export default Dialogs;
