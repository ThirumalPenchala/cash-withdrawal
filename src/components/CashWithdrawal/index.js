// Write your code here

import './index.css'

const DenominationItem = props => {
  const {updateBalance, denominationDetails} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
