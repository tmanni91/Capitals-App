import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountryName = () => {
    const {activeCapitalId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    return activeCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountryName(activeCapitalId)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capital-container">
            <select onChange={this.onChangeCapital} value={activeCapitalId}>
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
