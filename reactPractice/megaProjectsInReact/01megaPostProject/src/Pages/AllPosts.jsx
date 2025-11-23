import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../Components/Index'
import PostService from '../AppWrite/config'
// import PostService from "../AppWrite/Auth";


function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        PostService.getPosts([]).then((posts) => {
        console.log(posts.documents[0].featuredImage);
        
        if (posts) {
            setPosts(posts.documents)
        }
    })
    }, [])

     if(posts.length === 0 ){
             return (
                <div className="w-full py-8 mt-4 text-center">
                    <Container>
                        <div className="flex flex-wrap">
                            <div className="p-2 w-full">
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                    add some post to see all posts...
                                </h1>
                            </div>
                        </div>
                    </Container>
                </div>
            )
        }
    
  return (

    
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts