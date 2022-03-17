import React from "react";

// const addText = () =>{
//   return(
//     <div>
//       alert("why did you clicked??!!!!!")
//     </div>
//     )
// }

const InfoCard = (props) => {
  return(
    <div className="Info-card">
      <div className="columns">
        <div className="column is-one-third">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
              </div>
              <div className="buttons">
                <button>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;