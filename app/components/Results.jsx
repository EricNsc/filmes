import React from 'react'

export default function Results({Results}) {
  return (
    <div>
      {
        Results.map((result) => (
          <div key={result.id}>
            <h2>{result.original_title}</h2>
          </div>
        ))
      }
    </div>
  )
}
