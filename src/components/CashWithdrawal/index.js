// Write your code here

import * as react from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends react.Component {
  state = {amount: 2000}

  deleteValue = () => {
    const {value} = this.props
    const val = value
    this.setSate(prevState => ({
      amount: prevState.amount - val,
    }))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div>
        <h1 className="para">s</h1>
        <p className="para2">Your Balance</p>
        <p className="para3">{amount}</p>
        <p className="para4">In Rupees</p>
        <p className="para5">Withdraw</p>
        <p className="head2">Choose Sum(In Rupees)</p>
        {denominationsList.map(eachUser => (
          <DenominationItem
            Item={eachUser}
            key={eachUser.id}
            deleteValue={this.deleteValue}
          />
        ))}
      </div>
    )
  }
}
export default CashWithdrawal
