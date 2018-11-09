import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  onFindPetsClick = () => {
    let api = "/api/pets"
    if(this.state.filters.type !== 'all') {
      api += `?type=${this.state.filters.type}`;
    }

    console.log(api)

    fetch(api)
    .then(response => response.json())
    .then(pets => {
      this.setPets(pets)
    })
  }

  setPets = pets => {
    this.setState({ pets })
  }

  onChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = id => {
    let pets = [...this.state.pets];

    pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true;
      }
      return pet;
    })

    this.setState({ pets })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
