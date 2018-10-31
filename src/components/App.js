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

  fetchPets = () => {
    console.log("===>", "fetchPets fired");
    let endpoint = "/api/pets";

    if (this.state.filters.type !== "all") {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(resp => resp.json())
      .then(pets =>
        this.setState({ pets }, () =>
          console.log("==returnFilteredPets==>", pets)
        )
      );
  };

  onChangeType = event => {
    //setState of the filter depend on the option select event
    console.log("==select.event.target.value==>", event.target.value);
    this.setState(
      {
        filters: {
          ...this.state.filters,
          type: event.target.value
        }
      },
      () => console.log("==this.state.filters.type==>", this.state.filters.type)
    );
  };

  onAdoptPet = petId => {
    //Write pet adoption code here
    console.log("===> onAdoptPet fired");
    const pets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        return { ...pet, isAdopted: true };
      } else {
        return pet;
      }
    });
    this.setState({ pets }, () =>
      console.log("==onAdoptPet==>", this.state.pets)
    );
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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
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
