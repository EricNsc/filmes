import React from 'react'
import Card from './Card'

export default function Results({Results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-10 py-[100px] gap-[75px]'>
      {
        Results.map((result) => (
          <Card key={result.id} result={result} />
        ))
      }
    </div>
  )
}
