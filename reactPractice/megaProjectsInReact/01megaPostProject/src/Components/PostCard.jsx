import React from 'react'
// import Post from "../appwrite/config"
import  PostSerivce  from '../AppWrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  // console.log(featuredImage);
  // console.log(PostSerivce.getFilePreview(featuredImage));
  
  
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-300 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={PostSerivce.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard