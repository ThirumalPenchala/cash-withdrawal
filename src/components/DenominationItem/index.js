/* eslint-disable import/no-self-import */
// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.state
    const name = 'Sarah William'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="calculation-container">
          <div className="name-container">
            <div className="name-logo-container">
              <p className="name-logo">{initial}</p>
            </div>
            <h1 className="name">{name}</h1>
          </div>
          <div className="your-balance-container">
            <p className="your-balance-title">Your Balance</p>
            <p className="money">{amount}</p>
          </div>
          <p className="in-rupees">In Rupees</p>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="sum-rupees">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denomination-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
