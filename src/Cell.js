import React from 'react'
import { connect } from 'react-redux'

function Cell({ n, color }) {
  return (
    <div 
      style={{ 
        width: 30,
        height: 30,
        textAlign: 'center',
        padding: 10,
        float: 'left',
        backgroundColor: color
      }} 
      id={`${n}`}
      key={`${n}`}
    >{n}</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    color: state.colors[ownProps.n]
  }
}

export default connect(mapStateToProps)(Cell)