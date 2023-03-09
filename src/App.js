import {Component} from 'react'
import CountryItem from './components/CountryItem'
import VisitedCountryItem from './components/VisitedCountryItem'
import './App.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class App extends Component {
  constructor(props) {
    super(props)
    const filteredList = initialCountriesList.filter(
      each => each.isVisited === true,
    )
    this.state = {
      countriesList: initialCountriesList,
      visitedCountriesList: filteredList,
    }
  }

  clickToVisit = item => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(each => {
        if (each.id === item.id) {
          return {...each, isVisited: !each.isVisited}
        }
        return each
      }),
      visitedCountriesList: [...prevState.visitedCountriesList, item],
    }))
  }

  removeItem = id => {
    const {visitedCountriesList} = this.state

    const filteredList = visitedCountriesList.filter(each => each.id !== id)

    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(each => {
        if (each.id === id) {
          return {...each, isVisited: !each.isVisited}
        }
        return each
      }),
      visitedCountriesList: filteredList,
    }))
  }

  renderVisitedCountries = () => {
    const {visitedCountriesList} = this.state

    return (
      <ul className="visit-countries-list">
        {visitedCountriesList.map(each => (
          <VisitedCountryItem
            each={each}
            key={each.id}
            removeItem={this.removeItem}
          />
        ))}
      </ul>
    )
  }

  renderNoResults = () => (
    <div className="no-results-container">
      <p className="no-results">No Countries Visited Yet</p>
    </div>
  )

  render() {
    const {countriesList, visitedCountriesList} = this.state

    return (
      <div className="bg-container">
        <div className="countries-list-container">
          <h1 className="countries-heading">Countries</h1>
          <ul className="countries-list">
            {countriesList.map(each => (
              <CountryItem
                each={each}
                clickToVisit={this.clickToVisit}
                key={each.id}
              />
            ))}
          </ul>
        </div>
        <div className="visited-countries-list-container">
          <h1 className="countries-heading">Visited Countries</h1>
          {visitedCountriesList.length > 0
            ? this.renderVisitedCountries()
            : this.renderNoResults()}
        </div>
      </div>
    )
  }
}

export default App
