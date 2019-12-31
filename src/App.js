import React from 'react'
import Matrix from './Matrix'

export default function App({ numElements }) {
  return <>
    <h1>React Redux</h1>
    <Matrix numElements={numElements} />
  </>
}
