import React from 'react'
import './PostList.css'

const PostList = ({post}) => {
    console.log(post)
    let name ,second, third;
    if(post.message){

     name=post.message[0]
second=post.message[1]
third=post.message[2]

console.log(name)
    }
    return (
      <>
       <section><img className='img-fluid' src={name} alt="" /></section>
       <section><img className='img-fluid' src={second} alt="" /></section>
       <section><img className='img-fluid' src={third} alt="" /></section>
        </>
    )
}

export default PostList
