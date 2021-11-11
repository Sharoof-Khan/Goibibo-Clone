import React from "react";
import Popup from "reactjs-popup";

const contentStyle = {
  width: "45%"
};

export default function CustomModal () {
    return(
  <Popup
    trigger={<button className="button"> Pay </button>}
    modal
    contentStyle={contentStyle}
  >
    {close => (
      <div className="modal"> 
      <a className="close" onClick={close}>
      &times;
    </a>
        <div className="content" style={{color:"green"}}>
          {" "}
   <p className="content-p"> Congratulations! Your Seat is Booked</p>
        </div>
        <div className="actions">
         
          <button className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
    )}


