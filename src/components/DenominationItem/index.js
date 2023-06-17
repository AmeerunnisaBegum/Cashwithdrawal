// Write your code here

import './index.css'

const DenominationItem = props => {
  const {item, deleteValue} = props
  const {value, id} = item

  const onDelete = () => {
    deleteValue(id)
  }

  return (
    <li>
      <button type="button" className="buton" onClick={onDelete}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
