import React from 'react'

function page({params}) {
  const slug = params.slug;
  return (
    <div>{slug}</div>
  )
}

export default page
