import React, { Component } from 'react'
// import Cat from './Cat'

class Mouse extends Component {
  constructor (props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove (event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render () {
    return (
      <div style={{ height: '100%', width: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
        {/* <Cat mouse={this.state} /> */}
      </div>
    )
  }
}

export default Mouse
