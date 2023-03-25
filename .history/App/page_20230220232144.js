
import { groq } from "next-sanity"
import Blog from "../components/Blog"

import { client } from "../lib/sanity.client"
const query = groq`
    *[_type=='post'] {
      ...,
      "slug": slug.current,
      author->,
      categories[]->
    } | order(_createdAT desc)
  `
export default async function Home() {
    

    const posts = await client.fetch(query)
    console.log(posts)
    return  
        <div className="">
            <Blog posts = {posts}/>
        </div>
    
}