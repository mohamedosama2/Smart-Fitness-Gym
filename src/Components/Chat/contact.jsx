import React from "react";
import chatCss from "../../assets/css/chat.module.css";
import moment from "moment";
function Contact(props) {
  // console.log(props.id);
  return (
    <>
      <div
        class={`${chatCss.friend} ${
          props.currentContact
            ? props.currentContact.id === props.id
              ? chatCss.active
              : ""
            : ""
        }`}
        onClick={() => props.clickedHandler(props.contact)}
      >
        <img
          src={
            props.users[0].id === localStorage.getItem("userId")
              ? props.users[1].photo
              : props.users[0].photo
          }
          alt="friend image"
          class={chatCss.friend__img}
        />
        <div class={chatCss.friend__text}>
          <h6>
            {props.users[0].id === localStorage.getItem("userId")
              ? props.users[1].username
              : props.users[0].username}
          </h6>
          <p>{props.lastMessage ? props.lastMessage : "no messages"}</p>
        </div>
        <span class={chatCss.time}>
          {moment(props.createdAt).format("YY/MM/DD hh:mm")}
        </span>
      </div>
      <hr />
    </>
  );
}

export default React.memo(Contact);
