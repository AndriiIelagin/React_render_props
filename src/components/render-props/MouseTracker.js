import React, { Component } from 'react'
import Mouse from './Mouse'
import Cat from './Cat'

class MouseTracker extends Component {
  render () {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <h2>Move the mouser!</h2>
        <Mouse render={mouse => (<Cat mouse={mouse} />)} />
      </div>
    )
  }
}

export default MouseTracker
