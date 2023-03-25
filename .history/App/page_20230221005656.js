
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
    

    const post = await client.fetch(query)
    const posts = res.json()
    
    return  
        <div className="">
            <Blog posts = {posts}/>
        </div>
    
}