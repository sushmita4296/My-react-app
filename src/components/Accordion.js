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

render() {
  const {title, children} = this.props;
  const {expanded} = this.state;
  
  return(
    <div className="column is-half">
      <div 
        className={ "card " + (expanded ? "expanded" : "not-expanded") }
      >
        <header className="card-header" onClick={this.toggleCardState}>
          <p className="card-header-title">
            {title}
          </p>
          <a className="card-header-icon">
            <span className="icon">
              <i className="fa fa-angle-up"></i>
            </span>
          </a>
        </header>
        <div className="card-content" style={{ maxHeight: this.state.height }} ref={(content) => this.content = content }>
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
}

Accordion.propTypes = {
title: React.PropTypes.string.isRequired
}

class App extends React.Component {
render() {
  return(
    <section className="section">
      <div className="container">
        <h1 className="title">React + Bulma accordion (collapse)</h1>
        <hr />
        
        <div className="columns is-multiline">
          <Accordion title="Example title">
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus nec iaculis mauris.
            </p>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus nec iaculis mauris.
            </p>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
}

export default Accordion;