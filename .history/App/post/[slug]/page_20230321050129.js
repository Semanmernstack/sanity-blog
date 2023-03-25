import React from 'react'

function page({params}) {
  slug = params.slug;
  return (
    <div>{slug}</div>
  )
}

export default page
