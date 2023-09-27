// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displaytext = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="title">Count {count}</h1>
          <p className="number-text">Count is {displaytext}</p>
          <button
            className="btn-style"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 To 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
