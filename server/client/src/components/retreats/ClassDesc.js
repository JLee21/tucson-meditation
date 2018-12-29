import React, { Component } from "react";

class ClassDesc extends Component {
  state = {
    showMore: false
  };

  renderText = () => {
    const { desc } = this.props;

    if (desc.length > 150) {
      if (!this.state.showMore) {
        let word = desc
          .split(" ")
          .slice(0, 25)
          .join(" ");
        return `${word}...`;
      }
    }
    return desc;
  };
  handleReadMore = () => {
    this.setState(currState => ({ showMore: !currState.showMore }));
  };
  render() {
    const longText = this.props.desc.length > 200 ? true : false;
    const readHidePrompt =
      this.state.showMore === true ? "Hide more" : "Read more";
    return (
      <div className="card-content black-text">
        <span className="card-title">Description</span>
        <p>{this.renderText()}</p>
        {longText && (
          <div onClick={this.handleReadMore} className="detailClick">
            {readHidePrompt}
          </div>
        )}
      </div>
    );
  }
}

export default ClassDesc;
