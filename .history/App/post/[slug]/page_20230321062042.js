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
    <div className=" flex mt-8 flex-col items-center justify-center max-w-7xl mx-auto">
      <div>
        <div  className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]" >
          <h1>{post.title}</h1>
          <p>{new Date (post._createdAt).toLocaleDateString
              ("en-US", {
                                
                  day: "numeric",
                  month: "long",
                  year: "numeric",
              } )   
            }
                            
          </p>
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
