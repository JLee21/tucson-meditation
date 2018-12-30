import React from "react";

function LocationCard(props) {
  const {
    name,
    city,
    state,
    address,
    zipcode,
    url,
    pictureUrls,
    description,
    drivingDescription
  } = props.location;

  return (
    <div className="card horizontal">
      <div style={{ paddingLeft: "12px" }} className="card-image location">
        <h5
          style={{
            fontWeight: "100"
          }}
        >
          Location
        </h5>
        <img alt="retreat location" src={pictureUrls[0]} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <span className="card-title">{`${name}`}</span>
          <p style={{ marginBottom: "10px" }}>{description}</p>
          <div className="divider" />
          <p className="">
            <i style={{ marginRight: "10px" }} className="far fa-map" />
            Address
          </p>
          <p className="">{`${address} ${city}, ${state} ${zipcode}`}</p>
          <p className="fine-details">
            {drivingDescription && drivingDescription}
          </p>
        </div>
        <div className="card-action">
          <a href={url}>{url}</a>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
