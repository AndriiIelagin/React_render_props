import React, { Component } from 'react'
import './App.css'
// import MouseTracker from './components/render-props/MouseTracker'
import withMouse from './components/render-props/withMouse'
import Cat from './components/render-props/Cat'

class App extends Component {
  render () {
    const Comp = withMouse(Cat)
    return (
      <div className='App'>
        {/* <MouseTracker /> */}
        <Comp />
      </div>
    )
  }
}

export default App
