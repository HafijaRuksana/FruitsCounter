// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevCount => ({mango: prevCount.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevCount => ({banana: prevCount.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div>
        <div>
          <h1>
            Bob ate <span className="fruits-count">{mango}</span> mangoes
            <span className="fruits-count">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="each-fruit-container">
              <img
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image"
              />
              <button
                type="button"
                className="fruit-button"
                onClick={this.eatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="each-fruit-container">
              <img
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-image"
              />
              <button
                type="button"
                className="fruit-button"
                onClick={this.eatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
