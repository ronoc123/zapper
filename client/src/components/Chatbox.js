import Wrapper from "../assests/wrappers/Chatbox";
import { GrContact } from "react-icons/gr";
import { useState } from "react";
import Chattext from "./Chattext";
import FormRow from "../components/FormRow";

const Chatbox = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <Wrapper className={showChat ? "" : "show"}>
      <div className="click-container">
        <div className="contact-title" onClick={() => setShowChat(!showChat)}>
          <span className="title-text">Contact Me </span>
          <span className="icon">
            <GrContact />
          </span>
        </div>
        <Chattext showChat={showChat} />
      </div>
    </Wrapper>
  );
};

export default Chatbox;
