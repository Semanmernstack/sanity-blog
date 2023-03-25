import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react'

import { RichTextComponents } from '../../../components/RichTextComponents';
import { client } from '../../../lib/sanity.client';
import urlFor from '../../../lib/urlFor';
  

  export async function generateStaticParams() {
    const query = grog`*[_type=='post']
      {
        slug
      }`;

    const sluggy = await client.fetch(query);
    const slugSanity = sluggy.map((slug) => slug.slug.current)
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
  console.log(post)
  return (
    <div className=" relative overflow-y-scroll overflow-hidden flex mt-8 flex-col items-center justify-center max-w-7xl  mx-auto">
      <div>
        <div  className="relative w-[300px] items-center justify-center  h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]" >
          
          <Image
             className=" object-cover items-center justify-center "
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            
            fill
          />
          
        </div>
        <div className="text-xs flex items-center w-full shadow-xl p-2 justify-between font-bold bg-black text-white">
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
            <div className="flex flex-col items-center  justify-center">
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
        <PortableText value={post.body} components={RichTextComponents}/> 
        </div>
      </div>
    </div>
  )
}

export default page
