import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../lib/sanity.client';

 async function page({params}) {
  const slug = params.slug;
  const query = groq`
  *[type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `
  const post = await client.fetch(query, { slug })
  console.log(post)
  return (
    <div>{slug}</div>
  )
}

export default page
