import React from "react";
class Accordion extends React.Component {
constructor(props) {
  super(props);
  
  this.state = {
    expanded: false,
    height: 0,
  };
  
  this.toggleCardState = this.toggleCardState.bind(this);
}

toggleCardState(e) {
  const test = this.content.clientHeight;
  
  
  this.setState({
    "expanded": !this.state.expanded
  });
}


}

Accordion.propTypes = {
title: React.PropTypes.string.isRequired
}



export default Accordion;