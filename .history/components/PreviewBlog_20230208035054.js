"use client"
import React from 'react'
import { usePreview } from '../lib/sanity.preview'
import Blog from './Blog'

export default function PreviewBlog({ query }) {
   const posts = usePreview(null, query) 
   console.log(posts)
  return (
    <div>
        <Blog posts = {posts}/>
    </div>
  )
}

