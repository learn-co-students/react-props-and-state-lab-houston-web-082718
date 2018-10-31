import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  changeType = type => {
    let newFilter = this.state.filters;
    newFilter.type = type;
    this.setState({ filters: newFilter });
  };

  onAdoptPet = pet => {
    const newPets = this.state.pets.map(pet => {
      if (pet.id === pet.id) {
        pet.isAdopted = true;
      }
      return pet;
    });

    this.setState({ pets: newPets });
  };

  findPets = (url = null) => {
    let fullUrl = "";
    switch (this.state.filters.type) {
      case "all":
        fullUrl = "/api/pets";
        break;
      case "dog":
        fullUrl = "/api/pets?type=dog";
        break;
      case "micropig":
        fullUrl = "/api/pets?type=micropig";
        break;
      case "cat":
        fullUrl = "/api/pets?type=cat";
        break;
    }

    fetch(fullUrl)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }));
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
