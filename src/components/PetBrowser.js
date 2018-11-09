import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      this.props.pets.map(pet => {
        return <div className="ui cards"><Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} /></div>
      })
    )
  }
}

export default PetBrowser
