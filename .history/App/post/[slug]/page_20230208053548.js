import React from 'react'

function page({params :  {slug}}) {
  return (
    <div>
        <h1>{slug}</h1>
    </div>
  )
}

export default page