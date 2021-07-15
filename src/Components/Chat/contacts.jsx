import React, { useEffect, useRef, useState } from "react";
import chatCss from "../../assets/css/chat.module.css";
import Contact from "./contact";

function Contacts(props) {
  const cons = useRef();

  const [myContact, setMyContact] = useState();

  // useEffect(() => {
  //   if (input === "") cons.current.value = "";
  // }, [input]);

  // useEffect(() => {
  //   // dispatch(clearContacts(cons.current.value));
  //   if (myContact !== current) {
  //     setMyContact(current);
  //     let conversation = conversations[current];
  //     props.currentHandler(conversation);
  //     props.current(current);
  //   }
  // }, [current]);

  // const clickedHandler = (id,contact) => {
  //   // console.log("hena")
  //   // console.log(id)
  //   dispatch(clearContacts(id));
  //   console.log(myContact !== id)
  //   if (myContact !== id) {
  //     setMyContact(id);
  //     let conversation = conversations[id];
  //     props.currentHandler(conversation);
  //     props.current(id);
  //     props.setMyContactToMessage(contact)
  //   }
  // };

  return (
    <div className={`col-md-4 ${chatCss.side_chat}`}>
      <div className={chatCss.search_box}>
        <div className={chatCss.merge}>
          <i className="material-icons">search</i>
          <input
            type="text"
            placeholder="Search Here"
            ref={cons}
            // onChange={(e) => dispatch(changingInput(e.target.value))}
          />
        </div>
      </div>
      <div className={chatCss.all_friends}>
        {props.contacts.data? props.contacts.data.docs
          ? props.contacts.data.docs.map((c) => {
              return (
                <Contact
                  key={c.id}
                  id={c.id}
                  clickedHandler={props.currentHandler}
                  createdAt={c.createdAt}
                  lastMessage={c.lastMessage}
                  meta={c.meta}
                  users={c.users}
                  currentContact={props.currentContact}
                  contact={c}
                />
              );
            })
          : "":""}
      </div>
    </div>
  );
}

export default React.memo(Contacts);
