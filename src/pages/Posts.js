import Post from '../components/Post'
import fire from '../components/Firebase'
import { useEffect, useState } from 'react'

export default function Posts(props) {

    const [posts, SetPosts] = useState([...props.posts])

    useEffect(() => {
        fire.firestore().collection('posts').onSnapshot(snapshot => {
            snapshot.forEach(post => {
                posts.push(post.data())
            })
            SetPosts(posts)
        })
    }, [])

    return(
        <div style = {{padding: "20px 20px"}}>
            <h1>Posts</h1>
            <br/>
            {
                posts.map(post => {
                    
                    return(
                        <Post key={post.id} title = {post.title} text = {post.content}/>
                    )
                })
            }

        </div>
    )
}