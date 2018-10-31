import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
      const pet = this.props.pets.map(pet => {
         return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
      })

      if (this.props.pets.length !== 0) {
          return <div className="ui cards">{pet}</div>
      } else { return null}
  }
}

export default PetBrowser
