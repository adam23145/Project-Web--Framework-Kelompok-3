import React, { useRef, useEffect } from "react";
import Moment from "react-moment";
import "../css/chat.css";

const Message = ({ msg, user1 }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);
  return (
    <div>
      <li className={`${msg.from === user1 ? "right" : ""}`} ref={scrollRef}>
        <div className="conversation-list ">
          <div className="ctext-wrap">
            <div className="ctext-wrap-content ">
              <p className="mb-0">{msg.text}</p>
            </div>
          </div>
          <div className="text-muted ms-3 me-3 text-right">
              <small>
                <Moment fromNow>{msg.createdAt.toDate()}</Moment>
              </small>
            </div>
        </div>
      </li>
    </div>
  );
};

export default Message;
