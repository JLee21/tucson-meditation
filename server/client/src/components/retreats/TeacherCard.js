import React from "react";

function OptionCard(props) {
  const {
    firstName,
    lastName,
    pictureUrls,
    description,
    personalUrl
  } = props.teacher;

  return (
    <div className="card horizontal">
      <div style={{ "padding-left": "12px" }} className="card-image teacher">
        <h5
          style={{
            "font-weight": "100"
          }}
        >
          Teacher
        </h5>
        <img alt="teacher profile" src={pictureUrls} />
      </div>
      <div className="">
        <div className="card-content">
          <span className="card-title">{`${firstName} ${lastName}`}</span>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href={personalUrl}>{personalUrl}</a>
        </div>
      </div>
    </div>
  );
}

export default OptionCard;
