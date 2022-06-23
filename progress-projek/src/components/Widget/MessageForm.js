import React from "react";
import Attachment from "../assets/svg/Attachment";

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  return (
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
