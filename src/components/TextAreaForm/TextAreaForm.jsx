import React, { Component } from "react";

class Textareademo extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <div className="newRhymeComp">
        
        <textarea
          value={this.state.textAreaValue}
          onChange={this.handleChange}
          rows={10}
        />
        <button type="submit">Save</button>
      </div>
    );
  }
}

export default Textareademo;