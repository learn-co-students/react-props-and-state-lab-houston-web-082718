import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  renderPets = pets => {
    pets.map(pet => {
      return <Pet pet={pet} />;
    });
  };

  render() {
    console.log(this.props);

    return (
      <div className="ui cards">
        {this.props.pets.map(pet => {
          return (
            <Pet
              key={pet.id}
              pet={pet}
              onAdoptPet={() => this.props.onAdoptPet(pet)}
            />
          );
        })}
      </div>
    );
  }
}

export default PetBrowser;
