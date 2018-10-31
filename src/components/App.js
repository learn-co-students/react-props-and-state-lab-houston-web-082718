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

  onFindPetsClick = () => {
      this.setState({ pets: [] })

      if(this.state.filters.type === 'all') {
          fetch('/api/pets')
          .then(r=> r.json())
          .then(r=> {
              this.setState({
                  pets: r
              })
          })
      } else {
          fetch(`/api/pets?type=${this.state.filters.type}`)
          .then(r=> r.json())
          .then(r=> {
              this.setState({
                  pets: r
              })
          })
      }

  }

  handleChange = (event) => {
      this.setState({
          pets: [],
          filters: {type: event.target.value},
      })
  }

  handleAdopt = (id) => {
      // -----> USING IF STATEMENT
      const updatedPetsArray = this.state.pets.map(pet =>
          { if (pet.id === id) {
              pet.isAdopted = true
          }

          return pet
      })
      this.setState({ pets: updatedPetsArray })

      // -----> USING TERNARY OPERATOR
      // const pets = this.state.pets.map(pet => {
      //     return pet.id === id ? {...pet, isAdopted: true} : pet
      // })
      // this.setState({ pets })

      // -----> USING PATCH REQUEST
      // fetch(`/api/pets?type=${this.state.filters.type}/${id}`, {
      //     method: 'PATCH',
      //     body: JSON.stringify({isAdopted: true})
      // })
      // .then(r=> fetch(`/api/pets?type=${this.state.filters.type}`))
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
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
