import React, { Component } from "react";
import OptionCard from "./OptionCard";

class OptionCont extends Component {
  render() {
    const { fees } = this.props;
    console.log(fees);

    return (
      <div style={{ paddingTop: "2px", paddingBottom: "4px" }} class="grey ">
        {fees.options.map(option => {
          console.log("option", option);
          return (
            <OptionCard
              option={option}
              deadline={fees.deadline}
              earlyBirdDeadline={fees.earlyBirdDeadline}
            />
          );
        })}
      </div>
    );
  }
}

export default OptionCont;
