import React from 'react'
import TierRows from './TierRows'

const RowsContainer = () => {
  return (
    <div style={{backgroundColor: 'black', border: '1px solid black'}}>
        <TierRows label='S' labelColor='violet'/>
        <TierRows label='A' labelColor='orange'/>
        <TierRows label='B' labelColor='yellow'/>
        <TierRows label='C' labelColor='lightgreen'/>
        <TierRows label='F' labelColor='lightblue'/>
    </div>
  )
}

export default RowsContainer