import React, { useEffect, useState } from 'react'
import PostList from './PostList'

const link='https://dog.ceo/api/breeds/image/random/3'
const App = () => {
    
    const [image1 ,setImage1]=useState([])
   
    const image=[]


    const fetchDAta =async()=>{
      
        const res=await fetch(`${link}`)
        
        const data= await res.json()
        console.log(data)

        // image.push(data)
        setImage1(data)
        console.log(image1)
// console.log(image)

        // console.log(image1)

    }
    useEffect(()=>{

        fetchDAta()
        fetchDAta()
        // fetchDAta()

        
    


    }
    ,[])
    
    // console.log(image1)l;
    return (
         <div style={{backgroundColor: "black"}}>
            

            {image1 && <PostList post={image1} />}

           

        </div>
    )
}

export default App
