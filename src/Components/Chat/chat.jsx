import React, { useEffect, useState, useCallback } from "react";
import chatCss from "../../assets/css/chat.module.css";
// import photo from "../../images/friend_1.png";
import Contacts from "./contacts";
import Messaging from "./messaging";
import io from "socket.io-client";
import axios from "axios";

function Chat() {
  const [contacts, setContacts] = useState([]);
  const [currentConversationMessages, setCurrentConversationMessages] =
    useState([]);
  const [currentContact, setCurrentContact] = useState();
  const [socket, setSocket] = useState();
  const [conversations, setConversations] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const fetchAll = useCallback(async () => {
    const contacts = await axios.get("/conversations");
    setContacts(contacts);
    const fullConversations = contacts.data.docs.map((c) =>
      axios.get(`/conversations/${c.id}/messages`)
    );
    const recommendedContacts = axios.get("/fetch-recommendations");
    const res = await Promise.all([...fullConversations, recommendedContacts]);
    console.log(res)
    setRecommendations(res[res.length - 1]);
    setConversations(res.slice(0, res.length - 1));
  }, []);

  useEffect(() => {
    fetchAll();
  }, []);

  console.log(conversations);
  console.log(recommendations);
  console.log(contacts);

  useEffect(() => {
    const s = io("https://smartfitnessgym.herokuapp.com/chat");
    s.on("connect", () => {
      s.emit("authenticate", { token: localStorage.getItem("token") });
    });
    setSocket(s);
  }, []);

  useEffect(() => {
    const slider = document.querySelector("#slider");
    const sliderImages = document.querySelectorAll("#slider img");

    //Buttons
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");

    let counter = 1;
    const size = 100;

    if (slider) {
      slider.style.transform = "translateX(" + -size * counter + "px)";
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (counter == sliderImages.length - contacts.length) return;
        slider.style.transition = "transform 0.4s ease-in-out";
        counter++;
        slider.style.transform = "translateX(" + -size * counter + "px)";
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (counter <= 0) return;
        slider.style.transition = "transform 0.4s ease-in-out";
        counter--;
        slider.style.transform = "translateX(" + -size * counter + "px)";
      });
    }
  }, [contacts.length]);

  const currentHandler = (con) => {
    console.log(con);
    setCurrentContact(con);
  };

  const addMessage = (content, conversation) => {
    socket.emit("message", {
      to: currentContact, //id user
      conversation, //id conversation
      content,
    });
  };

  return (
    <>
      {/* Slider */}
      <div className="container" style={{ paddingTop: "90px" }}>
        <div className={chatCss.slider_container}>
          <div className={chatCss.slider} id="slider">
            {recommendations.data
              ? recommendations.data.docs
                ? recommendations.data.docs.map((c) => (
                    <span
                      key={c.id}
                      onClick={async () => {
                        await axios.post("/create-conversation", { to: c.id });
                        fetchAll();
                      }}
                    >
                      {" "}
                      <img src={c.photo} alt={c.id} />
                    </span>
                  ))
                : ""
              : ""}
          </div>
        </div>

        <a
          className={`carousel-control-prev ${chatCss.carousel_control_prev}`}
          id="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className={`carousel-control-next ${chatCss.carousel_control_next}`}
          id="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
      {/* End Slider */}

      <div className={`container ${chatCss.content}`}>
        <div className="row no-gutters">
          <Contacts socket={socket} currentHandler={currentHandler} currentContact={currentContact} contacts={contacts} />
          {/* <Messaging
            socket={socket}
            currentContact={currentContact}
            addMessage={addMessage}
            currentConversation={currentConversation}
            contactForMessage={contactForMessage}
            currentHandler={currentHandler}
          /> */}
        </div>
      </div>
    </>
  );
}

export default React.memo(Chat);
