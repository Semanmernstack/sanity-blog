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
    <div className=" max-w-7xl mx-auto">
      <div>
        <div  className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]" >
          <Image
             className=" object-cover "
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
