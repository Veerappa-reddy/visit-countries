import './index.css'

const CountryItem = props => {
  const {each, clickToVisit} = props
  const {name, isVisited} = each

  const clickCountryItem = () => {
    clickToVisit(each)
  }

  return (
    <li className="country-item">
      <p>{name}</p>
      {isVisited ? (
        <p className="Visited">Visited</p>
      ) : (
        <button type="button" className="Visit" onClick={clickCountryItem}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
