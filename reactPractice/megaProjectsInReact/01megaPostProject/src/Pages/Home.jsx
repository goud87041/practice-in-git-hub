import React, {useEffect, useState} from 'react'
// import PostService from "../appwrite/config";
import  PostService  from '../AppWrite/config'
import {Container, PostCard} from '../Components/Index'
import { useSelector } from 'react-redux'
import authService from '../AppWrite/Auth'

function Home() {
    const [posts, setPosts] = useState([])
    const userCheck = useSelector(state => state.auth)
    
    
   useEffect(() => {
    if (!userCheck?.userData) return;

    const uid = userCheck.userData.$id;

    // console.log(userCheck.userData.name);
    

    PostService.getPosts(uid).then((result) => {
        if (result) {
            setPosts(result.documents);
        }
    });
}, [userCheck.userData]);

  
    if (! userCheck.status) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if(posts.length === 0 ){
         return (
            <div className="w-full py-8 mt-4 text-center">
                {/* <div className='text-2xl text-start ml-5'>welcome : {userCheck.userData.name}</div> */}
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                add some post to see...
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            {/* <div className='text-2xl text-start'>welcome : {userCheck.userData.name}</div> */}
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

export default Home