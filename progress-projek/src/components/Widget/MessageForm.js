import React from "react";
import Attachment from "../assets/svg/Attachment";

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
    // <form className="message_form" onSubmit={handleSubmit}>
    //   <label htmlFor="img">
    //     <Attachment />
    //   </label>
    //   <input onChange={(e) => setImg(e.target.files[0])} type="file" id="img" accept="image/*" style={{ display: "none" }} />
    //   <div>
    //     <input type="text" placeholder="Enter message" value={text} onChange={(e) => setText(e.target.value)} />
    //   </div>
    //   <div>
    //     <button className="btn">Send</button>
    //   </div>
    // </form>
    <div>
      <div className="p-3 chat-input-section">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="position-relative">
                <input type="text" className="form-control chat-input rounded" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Message..." />
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary chat-send w-md">
                <span className="d-none d-sm-inline-block me-2">Send </span> <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
