import React from "react";

class Pet extends React.Component {
  handleOnAdoptPet = () => {
    this.props.onAdoptPet(this.props.pet.id);
  };

  render() {
    const { pet } = this.props;

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <p>Gender: {pet.gender === "female" ? "♀" : "♂"}</p>
            Pet name: {pet.name}
          </a>
          <div className="meta">
            <span className="date">Pet type: {pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ? (
            <button className="ui disabled button" disabled>
              Already adopted
            </button>
          ) : (
            <button
              className="ui primary button"
              onClick={this.handleOnAdoptPet}
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
