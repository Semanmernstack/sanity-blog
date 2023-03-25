import React from 'react'

function page({params}) {
  slug = params.slug.current;
  return (
    <div>{slug}</div>
  )
}

export default page
