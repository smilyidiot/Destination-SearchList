// Write your code here

import './index.css'

const DestinationSearch = props => {
  const {destinationsInfo} = props
  const {name, imgUrl} = destinationsInfo

  return (
    <li className="listItem col-sm-12 col-md-6 col-lg-3">
      <img src={imgUrl} alt={name} className="image" />
      <p className="place">{name}</p>
    </li>
  )
}

export default DestinationSearch
