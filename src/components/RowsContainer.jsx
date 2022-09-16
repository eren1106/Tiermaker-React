import React from 'react'
import TierRows from './TierRows'

const RowsContainer = ({rows}) => {

  return (
    <div style={{ backgroundColor: 'black', border: '1px solid black' }}>
      {rows.map((row) =>
        <TierRows label={row.label} labelColor={row.labelColor} id={row.id} key={row.id} items={row.items} />
      )}
    </div>
  )
}

export default RowsContainer