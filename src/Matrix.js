import React from 'react'
import { connect } from 'react-redux'
import Cell from './Cell'

function Matrix({ numElements, numColorUpdates, startTime }) {
  const secondsRunning = (Date.now() - startTime) / 1000
  const elements = []
  for (let n = 1; n <= numElements; n++) {
    elements.push(<Cell key={n} n={n} />)
  }
  return (
    <div>
      <h1 style={{ fontWeight: 100 }}><span>{secondsRunning}</span>s</h1>
      <div>{numColorUpdates.toLocaleString()} colors</div>
      <div>
        {Math.floor(numColorUpdates / secondsRunning)} colors per second
      </div>
      <div style={{ width: 500 }}>
        {elements}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numColorUpdates: state.numColorUpdates || 0,
    startTime: state.startTime
  }
}

export default connect(mapStateToProps)(Matrix)