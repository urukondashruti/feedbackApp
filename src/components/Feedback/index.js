import {Component} from 'react'

import './index.css'

const Items = props => {
  const {Item, onDelete} = props
  const {name, imageUrl} = Item

  const onButton = () => {
    onDelete()
  }

  return (
    <li className="list1">
      <button type="button" className="but" onClick={onButton}>
        <img src={imageUrl} alt={name} className="size" />
      </button>
      <p className="para">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {
    status: true,
  }

  onDelete = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {status} = this.state

    return (
      <div className="back">
        <div className="con">
          {status ? (
            <div>
              <h1 className="head">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list2">
                {emojis.map(each => (
                  <Items key={each.id} Item={each} onDelete={this.onDelete} />
                ))}
              </ul>
            </div>
          ) : (
            <div className="con2">
              <img src={loveEmojiUrl} alt="love emoji" className="size" />
              <h1>Thank You?</h1>
              <p>
                we will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
