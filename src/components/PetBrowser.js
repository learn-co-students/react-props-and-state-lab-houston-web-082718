import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {

    const allPets = this.props.pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
    })
    return <div className="ui cards">
    {allPets}
    </div>
  }
}

export default PetBrowser
