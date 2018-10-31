import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    // const petsProps = { pets: this.props.pets, adopt: this.props.onAdoptPet };
    console.log("==this.props.pets=>", this.props.pets);
    let petDivs = this.props.pets.map(pet => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={pet.id} />;
    });
    return <div className="ui cards">{petDivs}</div>;
  }
}

export default PetBrowser;
