import React from 'react'
import Mouse from './Mouse'

function withMouse (WrappedComponent) {
  return class extends React.Component {
    render () {
      return (
        <Mouse render={mouse => (
          <WrappedComponent {...this.props} mouse={mouse} />
        )} />
      )
    }
  }
}

export default withMouse
