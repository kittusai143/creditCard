import React, {useState} from 'react'
import './index.css'

const App = () => {
  // Call useState twice for card number and cardholder name
  const [cardNumber, setCardNumber] = useState('') // First useState call
  const [cardName, setCardName] = useState('') // Second useState call

  return (
    <div className="container">
      {/* Credit Card Section */}
      <div className="card">
        <h3 className="card-title">CREDIT CARD</h3>
        <div className="card-number">{cardNumber || '0000 0000 0000 0000'}</div>
        <div className="card-holder">
          <p>CARDHOLDER NAME</p>
          <p>{cardName.toUpperCase() || 'YOUR NAME'}</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="form">
        <h3>Payment Method</h3>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)} // Updates cardNumber
        />
        <input
          type="text"
          placeholder="Cardholder Name"
          value={cardName}
          onChange={e => setCardName(e.target.value)} // Updates cardName
        />
      </div>
    </div>
  )
}

export default App
