import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react'
import { client } from '../../../lib/sanity.client';
import urlFor from '../../../lib/urlFor';

 async function page({params}) {
  const slug = params?.slug;
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `
  const post = await client.fetch(query, { slug })
  console.log(post)
  return (
    <div className="w-1/2">
      <div>
        <div className="object-contain  w-[350px] h-[350px] "  >
          <Image
           
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
        </div>
      </div>
    </div>
  )
}

export default page
