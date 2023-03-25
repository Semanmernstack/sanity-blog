
import Image from 'next/image'
import React from 'react'
import urlFor from '../lib/urlFor'
import ClientRoutes from './ClientRoutes'



function Blog({ posts }) {
    console.log(posts)
  return (
    <div className=" overflow-y bg-zinc-900 p-2 shadow-4xl max-w-7xl mx-auto  ">
        {posts.map((post) => (
            <ClientRoutes key= {post._id} route={`/post/${post.slug.current}`}>
                <div  className="shadow-xl group flex  flex-col items-center  text-center text-white cursor-pointer justify-center  " >
                    <div className="group-hover:scale-105 transition-transform hover:animate-pulse opacity-1     p-7 my-3  duration-250 ease-out">
                        <div className="relative  w-[350px] p-4 border mt-4  h-[350px] lg:w-[500px] lg:h-[500px] object-cover items-center justify-center  mb-5 ">
                        <Image
                            className="object-cover "
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            
                            fill
                            
                        />
                        </div>
                        <div>
                        {post.categories.map((category) => (
                            <div  key ={category._id}>
                                <p>{category.title}</p>
                            </div>
                        ))}
                        </div>
                        <div className='p-3'>
                            <div>{post.title}</div>
                            <p>{new Date (post._createdAt).toLocaleDateString
                                    ("en-US", {
                                
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    } )   
                                }
                            
                            </p>
                        </div>
                        <div>
                            <p>{post.description}</p> 
                        </div>
                        <div className='border p-1 rounded-full bg-transparent'>
                            <p>Read more...</p>
                        </div>
                    </div>
                
                </div>
            </ClientRoutes>    
            
        ))}
    </div>
  )
}

export default Blog