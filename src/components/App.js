import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: "all"
    }
  };

  onChangeType = event => {
    const nuState = event.target.value;
    console.log(nuState);

    this.setState(
      {
        filters: {
          type: nuState
        }
      },
      function() {
        console.log("--------", this.state.filters.type);
      }
    );
  };

  onFindPetsClick = () => {
    if (this.state.filters.type !== "all") {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(pets =>
          this.setState(
            {
              pets: pets
            },
            console.log(this.state.pets)
          )
        );
    } else {
      fetch("/api/pets")
        .then(resp => resp.json())
        .then(pets =>
          this.setState(
            {
              pets: pets
            },
            console.log(this.state.pets)
          )
        );
    }
  };

  onAdoptPet = id => {
    const updatedPetsArray = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true;
      }

      return pet;
    });

    this.setState({ pets: updatedPetsArray });
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
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} isAdopted={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
