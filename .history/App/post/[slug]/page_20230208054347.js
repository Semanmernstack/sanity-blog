import { groq } from 'next-sanity'
import React from 'react'
import { client } from '../../../lib/sanity.client'

async function page({params :  {slug}}) {
    const query = grog`
    *[_type=="post" && slug.current == $[slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `
    const post = await client.fetch(query, {slug})
    console.log(post)
  return (
    <div>
        <h1>{slug}</h1>
    </div>
  )
}

export default page