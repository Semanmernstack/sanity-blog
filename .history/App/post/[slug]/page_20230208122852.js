import { groq } from 'next-sanity'
import React from 'react'
import { client } from '../../../lib/sanity.client'

async function page() {
    const {slug} = params.slug
    const query = groq`
    *[_type=="post" && slug.current == $slug][0]
        {
          ...,
          author->,
          categories[]->
        }
    `
    
    
  return 
    <div>
        
      <h1>hh</h1>
    </div>
  
}

export default page