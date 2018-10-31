import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = type => {
    this.setState({
      filters: {
        type: type,
      }
    })
  }

  changePets = pets => {
    this.setState({
      pets: pets,
    })
  }

  fetchPets = () => {
    let URL = '/api/pets'
    if (this.state.filters.type !== 'all') {
      URL = '/api/pets?type=' + this.state.filters.type
    }
  fetch(URL)
    .then(r => r.json())
    .then(this.changePets)
  }

  adoptPet = (id) => {
    let pets = [...this.state.pets]
    pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
      return pet
    })
    this.setState({
      pets: pets
    })
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
