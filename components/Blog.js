
import Image from 'next/image'
import React from 'react'
import urlFor from '../lib/urlFor'
import ClientRoutes from './ClientRoutes'



function Blog({ posts }) {
    console.log(posts)
  return (
    <div className=" overflow-y  ">
        {posts.map((post) => (
            <ClientRoutes key= {post._id} route={`/post/${post.slug.current}`}>
                <div  className="shadow-xl group flex  flex-col items-center text-center cursor-pointer   bg-red-400 justify-center  " >
                    <div className="group-hover:scale-105 transition-transform hover:animate-pulse opacity-1     p-7 my-3  duration-250 ease-out">
                        <div className="relative w-[500px] p-4 mt-4  h-[420px] object-cover items-center justify-center  mb-5 ">
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
                        <div>
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
                        <div>
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