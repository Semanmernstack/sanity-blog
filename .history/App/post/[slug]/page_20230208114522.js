import { groq } from 'next-sanity'
import React from 'react'
import { client } from '../../../lib/sanity.client'

async function page({params :  {slug}}) {
    const query = groq`
    *[_type=="post" && slug.current == $slug][0]
        {
          ...,
          author->,
          categories[]->
        }
    `
    const post = await client.fetch(query, {params : {slug}})
    console.log(post)
  return (
    <div>
        
        <h1>j</h1>
    </div>
  )
}

export default page