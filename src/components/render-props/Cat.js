import React, { Component } from 'react'
import image from '../../assets/cat-small.png'

class Cat extends Component {
  render () {
    const mouse = this.props.mouse
    return (
      <img src={image} style={{ position: 'absolute', top: mouse.y, left: mouse.x }} alt='Cat' />
    )
  }
}
export default Cat
