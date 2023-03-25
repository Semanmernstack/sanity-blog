import React from 'react'
import { usePreview } from '../lib/sanity.preview'

export default function PreviewBlog({ query }) {
   const posts = usePreview(null, query) 
   console.log(posts)
  return (
    <div>
        <h1>hh</h1>
    </div>
  )
}

