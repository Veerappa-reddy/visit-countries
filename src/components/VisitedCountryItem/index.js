import './index.css'

const VisitedCountryItem = props => {
  const {each, removeItem} = props
  const {imageUrl, id, name} = each

  const removeCountry = () => {
    removeItem(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" className="visited-country-img" />
      <div className="remove-btn-container">
        <p>{name}</p>
        <button type="button" onClick={removeCountry} className="remove-btn">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
