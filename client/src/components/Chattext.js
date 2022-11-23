import React from "react";
import { useState } from "react";
import FormRow from "./FormRow";
import { AiOutlineSend } from "react-icons/ai";

const Chattext = ({ showChat }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { msg: "Please type Email, LinkedIn, or Portfolio...", sender: "bot" },
  ]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = () => {
    let val = input.toLowerCase();

    let mes = [...messages, { msg: val, sender: "human" }];
    setMessages(mes);

    if (val === "email") {
      setTimeout(() => {
        let botMes = [
          ...messages,
          { msg: val, sender: "human" },
          {
            msg: "Kamperman.conor@gmail.com",
            sender: "bot",
          },
        ];
        setMessages(botMes);
      }, 1000);
    } else if (val === "linkedin") {
      setTimeout(() => {
        let botMes = [
          ...messages,
          { msg: val, sender: "human" },
          {
            msg: "https://www.linkedin.com/in/conor-kamperman-34a469248/",
            sender: "bot",
          },
        ];
        setMessages(botMes);
      }, 1000);
    } else if (val === "portfolio") {
      setTimeout(() => {
        let botMes = [
          ...messages,
          { msg: val, sender: "human" },
          { msg: "https://conor-portfolio.netlify.app/", sender: "bot" },
        ];
        setMessages(botMes);
      }, 1000);
    } else {
      setTimeout(() => {
        let botMes = [
          ...messages,
          { msg: val, sender: "human" },
          { msg: "Please input Email, LinkedIn, or Portfolio", sender: "bot" },
        ];
        setMessages(botMes);
      }, 1000);
    }
    setInput("");
  };

  return (
    <>
      <div className="chat-box">
        {messages.map((msg, i) => {
          return (
            <div
              className={msg.sender === "bot" ? "bot-msg" : "text-msg"}
              key={i}
            >
              {msg.msg}
            </div>
          );
        })}
      </div>
      {showChat && (
        <div className="search-bar">
          <FormRow value={input} handleChange={onChange} type="text" />
          <button className="send-btn" onClick={onSubmit}>
            <AiOutlineSend />
          </button>
        </div>
      )}
    </>
  );
};

export default Chattext;
