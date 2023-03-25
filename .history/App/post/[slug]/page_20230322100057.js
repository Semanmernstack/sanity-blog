import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react'

import { RichTextComponents } from '../../../components/RichTextComponents';
import { client } from '../../../lib/sanity.client';
import urlFor from '../../../lib/urlFor';
  export const revalidate = 15;
  

  export async function generateStaticParams() {
    
    const query = groq`*[_type=='post']
      {
        slug
      }
      `;

    const slugs = await client.fetch(query);
    const slugSanity = slugs.map((slug) => slug.slug.current)
    return slugSanity.map((slug) => ({
      slug,
    }))
  }

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
  
  return (
    <div className=" relative bg-zinc-500 overflow-hidden flex mt-8 flex-col items-center justify-center max-w-7xl  mx-auto">
      
        <div  className="relative w-[350px] items-center justify-center  h-[350px]  lg:w-[400px] lg:h-[400px]" >
          
          <Image
             className=" object-cover  "
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            
            fill
          />
          
        </div>
        <div className="text-xs flex items-center w-1/2 mt-10  shadow-xl p-2 justify-between font-bold bg-black text-white">
          <div>
            <h1>{post.title}</h1>
              <h1>{new Date (post._createdAt).toLocaleDateString
                  ("en-US", {
                                    
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                  } )   
                }
                                
              </h1>
            </div>
            <div className="flex flex-col items-center max-w-7xl mx-auto  justify-between">
              <Image
                className='rounded-full'
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                height={40}
                width={40}
              />
              <h1>{post.author.name}</h1>
            </div>
        </div >
        <div className="mt-8 p-4">
        <PortableText value={post.body} serializers={RichTextComponents}/> 
        </div>
      
    </div>
  )
}

export default page
