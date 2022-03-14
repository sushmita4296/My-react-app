import React from "react";
const addText = () =>{
  return(
    <div>
      <p>The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. Morpht has been developing Paragraph approaches to site building since 2015. This case study captures some of the content from a Drupal 7 "Paragraphs Demo" site which was built to showcase what could be done with Paragraphs.</p>
    </div>
    )
}

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
                  <button className="button is-primary" onClick={addText}>
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